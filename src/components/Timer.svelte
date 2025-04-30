<script lang="ts">
  import { onMount, onDestroy } from 'svelte';

  // --- Constants ---
  const DAILY_GOAL_MS = 6 * 60 * 60 * 1000; // 6 hours in milliseconds

  // --- localStorage Keys ---
  const LS_SESSIONS_KEY = 'workTimer_sessions_v2';
  const LS_IS_RUNNING_KEY = 'workTimer_isRunning_v2';
  const LS_IS_PAUSED_KEY = 'workTimer_isPaused_v2';
  const LS_ORIGINAL_START_KEY = 'workTimer_originalStart_v2';
  const LS_LAST_START_KEY = 'workTimer_lastStart_v2';
  const LS_ACCUMULATED_KEY = 'workTimer_accumulated_v2';
  const LS_STOPPED_ELAPSED_KEY = 'workTimer_stoppedElapsed_v2';


  // --- State Variables ---
  let isRunning: boolean = false;
  let isPaused: boolean = false;
  let originalSessionStartTime: number | null = null;
  let lastStartTime: number | null = null;
  let accumulatedDuration: number = 0;
  let elapsedTime: number = 0;
  let intervalId: ReturnType<typeof setInterval> | null = null;
  let sessions: { startTime: number; endTime: number; duration: number }[] = [];

  // --- Helper Functions ---

  function formatTime(ms: number): string {
    if (isNaN(ms) || ms < 0) return '00:00:00';
    const totalSeconds = Math.floor(ms / 1000);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(
      2,
      '0'
    )}:${String(seconds).padStart(2, '0')}`;
  }

  function getDateString(timestamp: number): string {
    const date = new Date(timestamp);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  // --- Persistence Functions ---

  function saveState() {
    if (typeof window === 'undefined' || !window.localStorage) return;
    try {
      localStorage.setItem(LS_SESSIONS_KEY, JSON.stringify(sessions));
      localStorage.setItem(LS_IS_RUNNING_KEY, String(isRunning));
      localStorage.setItem(LS_IS_PAUSED_KEY, String(isPaused));
      localStorage.setItem(LS_ACCUMULATED_KEY, String(accumulatedDuration));

      if (originalSessionStartTime !== null) {
        localStorage.setItem(LS_ORIGINAL_START_KEY, String(originalSessionStartTime));
      } else {
        localStorage.removeItem(LS_ORIGINAL_START_KEY);
      }

      if (lastStartTime !== null) {
        localStorage.setItem(LS_LAST_START_KEY, String(lastStartTime));
      } else {
        localStorage.removeItem(LS_LAST_START_KEY);
      }

      if (!isRunning) {
        localStorage.setItem(LS_STOPPED_ELAPSED_KEY, String(elapsedTime));
      } else {
        localStorage.removeItem(LS_STOPPED_ELAPSED_KEY);
      }

    } catch (error) {
      console.error('Error saving state to localStorage:', error);
    }
  }

  function loadState() {
    if (typeof window === 'undefined' || !window.localStorage) return;
    try {
      const storedSessions = localStorage.getItem(LS_SESSIONS_KEY);
      sessions = storedSessions ? JSON.parse(storedSessions) : [];

      isRunning = localStorage.getItem(LS_IS_RUNNING_KEY) === 'true';
      isPaused = localStorage.getItem(LS_IS_PAUSED_KEY) === 'true';
      accumulatedDuration = parseInt(localStorage.getItem(LS_ACCUMULATED_KEY) || '0', 10);
      originalSessionStartTime = parseInt(localStorage.getItem(LS_ORIGINAL_START_KEY) || '0', 10) || null;
      lastStartTime = parseInt(localStorage.getItem(LS_LAST_START_KEY) || '0', 10) || null;

      if (isNaN(accumulatedDuration)) accumulatedDuration = 0;
      if (isNaN(originalSessionStartTime as number)) originalSessionStartTime = null;
      if (isNaN(lastStartTime as number)) lastStartTime = null;

      if (isRunning) {
        if (isPaused) {
          elapsedTime = accumulatedDuration;
        } else if (lastStartTime !== null) {
          elapsedTime = accumulatedDuration + (Date.now() - lastStartTime);
          startInterval();
        } else {
          console.warn('Inconsistent running state found in localStorage. Resetting.');
          resetTimerState();
          saveState();
        }
      } else {
        const stoppedElapsed = parseInt(localStorage.getItem(LS_STOPPED_ELAPSED_KEY) || '0', 10);
        elapsedTime = isNaN(stoppedElapsed) ? 0 : stoppedElapsed;
        resetTimerState();
      }

    } catch (error) {
      console.error('Error loading state from localStorage:', error);
      resetTimerState();
      sessions = [];
    }
  }

  // --- Timer Control Functions ---

  function startInterval() {
    stopInterval();
    if (lastStartTime === null) return;

    elapsedTime = accumulatedDuration + (Date.now() - lastStartTime);
    intervalId = setInterval(() => {
      if (lastStartTime === null || !isRunning || isPaused) {
          stopInterval();
          return;
      }
      elapsedTime = accumulatedDuration + (Date.now() - lastStartTime);
    }, 1000);
  }

  function stopInterval() {
    if (intervalId) {
      clearInterval(intervalId);
      intervalId = null;
    }
  }

  function resetTimerState() {
      isRunning = false;
      isPaused = false;
      originalSessionStartTime = null;
      lastStartTime = null;
      accumulatedDuration = 0;
  }

  // --- Button Actions ---

  function handleCheckIn() {
    const now = Date.now();
    isRunning = true;
    isPaused = false;
    originalSessionStartTime = now;
    lastStartTime = now;
    accumulatedDuration = 0;
    elapsedTime = 0;
    startInterval();
    saveState();
  }

  function handlePause() {
    if (!isRunning || isPaused || lastStartTime === null) return;

    stopInterval();
    const now = Date.now();
    accumulatedDuration = accumulatedDuration + (now - lastStartTime);
    elapsedTime = accumulatedDuration;
    isPaused = true;
    lastStartTime = null;
    saveState();
  }

  function handleResume() {
     if (!isRunning || !isPaused) return;

     const now = Date.now();
     isPaused = false;
     lastStartTime = now;
     startInterval();
     saveState();
  }

  function handleCheckOut() {
    if (!isRunning) return;

    stopInterval();
    const now = Date.now();
    let finalDuration: number;

    if (isPaused) {
      finalDuration = accumulatedDuration;
    } else if (lastStartTime !== null) {
      finalDuration = accumulatedDuration + (now - lastStartTime);
    } else {
        console.warn("Checking out in running state but lastStartTime is null.");
        finalDuration = accumulatedDuration;
    }

    if (originalSessionStartTime !== null && finalDuration >= 0) {
        sessions = [
          ...sessions,
          {
            startTime: originalSessionStartTime,
            endTime: now,
            duration: finalDuration,
          },
        ];
    } else {
        console.warn("Could not log session due to missing start time or invalid duration.");
    }

    elapsedTime = finalDuration;
    resetTimerState();
    saveState();
  }


  // --- Lifecycle Hooks ---

  onMount(() => {
    loadState();
  });

  onDestroy(() => {
    if (isRunning && !isPaused && lastStartTime !== null) {
        accumulatedDuration = accumulatedDuration + (Date.now() - lastStartTime);
        lastStartTime = null;
    }
    saveState();
    stopInterval();
  });

  // --- Reactive Computations ---

  $: displayTime = formatTime(elapsedTime);

  // Group sessions, sort by date, and calculate daily totals/goal status
  $: groupedAndSortedSessions = (() => {
    const groups: { [date: string]: typeof sessions } = {};
    sessions.forEach(session => {
      // Use end time to determine the date the session counts towards
      const dateKey = getDateString(session.endTime);
      if (!groups[dateKey]) groups[dateKey] = [];
      groups[dateKey].push(session);
    });

    const sortedDates = Object.keys(groups).sort((a, b) => b.localeCompare(a));

    return sortedDates.map(date => {
      const dailySessions = groups[date];
      // Calculate total duration for the day
      const dailyTotalDuration = dailySessions.reduce(
          (sum, session) => sum + session.duration,
          0
      );
      // Check if goal is met
      const goalMet = dailyTotalDuration >= DAILY_GOAL_MS;

      return {
        date: date,
        sessions: dailySessions,
        dailyTotalDuration: dailyTotalDuration, // Add total duration to the group object
        goalMet: goalMet // Add goal status to the group object
      };
    });
  })();

</script>

<div class="work-timer-container">
  <h2>Work Timer</h2>

  <div class="timer-display">
    {displayTime} {#if isPaused}(Paused){/if}
  </div>

  <div class="button-group">
    {#if !isRunning}
      <button class="check-in" on:click={handleCheckIn}>
        Check In (Start)
      </button>
    {:else}
      {#if !isPaused}
        <button class="pause" on:click={handlePause}>Pause</button>
      {:else}
        <button class="resume" on:click={handleResume}>Resume</button>
      {/if}
      <button class="check-out" on:click={handleCheckOut}>
        Check Out (Stop)
      </button>
    {/if}
  </div>


  {#if groupedAndSortedSessions.length > 0}
    <div class="session-log">
      <h3>Session Log (Daily Goal: {formatTime(DAILY_GOAL_MS)})</h3>
      {#each groupedAndSortedSessions as group (group.date)}
        <!-- Apply 'goal-met' class conditionally -->
        <div class="session-date-group" class:goal-met={group.goalMet}>
          <h4>
            {new Date(group.date + 'T00:00:00').toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
            <!-- Optionally display daily total -->
            <span class="daily-total">(Total: {formatTime(group.dailyTotalDuration)})</span>
            {#if group.goalMet}
              <span class="goal-badge">Goal Met! ✅</span>
            {/if}
          </h4>
          <ul>
            {#each group.sessions as session (session.startTime)}
              <li>
                <span class="time">
                  {new Date(session.startTime).toLocaleTimeString()} -
                  {new Date(session.endTime).toLocaleTimeString()}
                </span>
                <span class="duration">
                  Duration: {formatTime(session.duration)}
                </span>
              </li>
            {/each}
          </ul>
        </div>
      {/each}
    </div>
  {/if}
</div>

<style>
  /* --- Previous styles remain the same --- */
  .work-timer-container {
    font-family: sans-serif;
    border: 1px solid #ccc;
    padding: 20px;
    border-radius: 8px;
    max-width: 550px; /* Slightly wider for goal text */
    margin: 20px auto;
    text-align: center;
    background-color: #f9f9f9;
    color: #333;
  }

  .timer-display {
    font-size: 2.5rem;
    margin-bottom: 20px;
    font-weight: bold;
    color: #555;
    background-color: #eee;
    padding: 10px;
    border-radius: 4px;
    font-variant-numeric: tabular-nums;
  }

  .button-group {
    display: flex;
    justify-content: center;
    gap: 10px;
    margin-bottom: 20px;
  }

  button {
    padding: 10px 15px;
    font-size: 1rem;
    cursor: pointer;
    border: none;
    border-radius: 5px;
    color: white;
    transition: background-color 0.3s ease, opacity 0.3s ease;
    flex-grow: 1;
    max-width: 150px;
  }
   button:hover {
    opacity: 0.9;
  }

  .check-in { background-color: #28a745; }
  .check-out { background-color: #dc3545; }
  .pause { background-color: #ffc107; color: #333; }
  .resume { background-color: #17a2b8; }

  .session-log {
    margin-top: 20px;
    text-align: left;
    border-top: 1px solid #ddd;
    padding-top: 15px;
  }
  .session-log h3 {
    text-align: center;
    margin-bottom: 15px;
    color: #444;
    font-size: 1.1rem; /* Slightly smaller */
  }
  .session-date-group {
      margin-bottom: 20px;
      border: 1px solid transparent; /* Base border */
      border-radius: 6px; /* Match h4 radius */
      padding: 5px; /* Add padding around the group */
      transition: background-color 0.3s ease, border-color 0.3s ease; /* Smooth transition */
   }
  .session-date-group h4 {
    background-color: #e9ecef;
    padding: 8px 12px;
    border-radius: 4px;
    margin: 0 0 10px 0; /* Remove outer margin, add bottom */
    font-size: 1rem;
    color: #495057;
    display: flex; /* Use flexbox for alignment */
    justify-content: space-between; /* Space out elements */
    align-items: center;
    flex-wrap: wrap; /* Allow wrapping on small screens */
    gap: 10px; /* Space between elements */
  }
   .session-date-group h4 .daily-total {
      font-size: 0.85rem;
      font-weight: normal;
      color: #6c757d; /* Muted color */
   }
   .session-date-group h4 .goal-badge {
      font-size: 0.85rem;
      font-weight: bold;
      color: #198754; /* Bootstrap success green */
      background-color: #d1e7dd; /* Lighter green */
      padding: 2px 6px;
      border-radius: 4px;
   }

  .session-date-group ul { list-style: none; padding: 0 5px; margin: 0; } /* Indent list slightly */
  .session-date-group li {
    background-color: #fff;
    border: 1px solid #eee;
    padding: 10px 12px;
    margin-bottom: 8px;
    border-radius: 4px;
    font-size: 0.9rem;
    color: #666;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .session-date-group li .time { flex-grow: 1; margin-right: 15px; }
  .session-date-group li .duration { font-weight: 500; color: #333; white-space: nowrap; }

  /* --- Style for Goal Met --- */
  .session-date-group.goal-met {
      background-color: #e6ffed; /* Light green background */
      border-color: #a3e9b8; /* Slightly darker green border */
  }
  /* Optional: Style header differently when goal is met */
  .session-date-group.goal-met h4 {
      background-color: #c3e6cb; /* Darker green header background */
      color: #0f5132; /* Dark green text */
      border-color: #b1dfbb;
  }
  .session-date-group.goal-met h4 .daily-total {
      color: #146c43; /* Darker green for total text */
  }

</style>

