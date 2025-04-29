<script lang="ts">
  import { onDestroy } from 'svelte';

  // State variables
  let isRunning: boolean = false; // Tracks if the timer is currently running
  let startTime: number | null = null; // Stores the timestamp when the timer started
  let elapsedTime: number = 0; // Stores the total elapsed time in milliseconds for the current session
  let intervalId: ReturnType<typeof setInterval> | null = null; // Holds the interval ID for updating the display
  let sessions: { startTime: number; endTime: number; duration: number }[] = []; // Array to store completed sessions

  // Function to format milliseconds into HH:MM:SS
  function formatTime(ms: number): string {
    const totalSeconds = Math.floor(ms / 1000);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    // Pad with leading zeros if needed
    const paddedHours = String(hours).padStart(2, '0');
    const paddedMinutes = String(minutes).padStart(2, '0');
    const paddedSeconds = String(seconds).padStart(2, '0');

    return `${paddedHours}:${paddedMinutes}:${paddedSeconds}`;
  }

  // Function to handle button clicks (start/stop)
  function toggleTimer() {
    const now = Date.now();

    if (isRunning) {
      // --- Stop the timer (Check-out) ---
      if (intervalId) clearInterval(intervalId); // Clear the update interval
      intervalId = null;
      isRunning = false;

      // Calculate final duration for this session
      const finalElapsedTime = now - (startTime as number); // Use the actual end time
      elapsedTime = finalElapsedTime; // Update display one last time

      // Log the session
      sessions = [
        ...sessions,
        {
          startTime: startTime as number,
          endTime: now,
          duration: finalElapsedTime,
        },
      ];

      // Reset for the next session (optional, keeps the last duration displayed until next start)
      // startTime = null;
      // elapsedTime = 0;
    } else {
      // --- Start the timer (Check-in) ---
      startTime = now;
      elapsedTime = 0; // Reset elapsed time for the new session
      isRunning = true;

      // Start the interval to update the display every second
      intervalId = setInterval(() => {
        elapsedTime = Date.now() - (startTime as number);
      }, 1000);
    }
  }

  // Clean up the interval when the component is destroyed
  onDestroy(() => {
    if (intervalId) {
      clearInterval(intervalId);
    }
  });

  // Reactive statement to format the displayed time whenever elapsedTime changes
  $: displayTime = formatTime(elapsedTime);
</script>

<div class="work-timer-container">
  <h2>Work Timer</h2>

  <div class="timer-display">
    {displayTime}
  </div>

  <button on:click={toggleTimer} class:running={isRunning}>
    {#if isRunning}
      Check Out (Stop)
    {:else}
      Check In (Start)
    {/if}
  </button>

  {#if sessions.length > 0}
    <div class="session-log">
      <h3>Session Log</h3>
      <ul>
        {#each sessions as session, i (session.startTime)}
          <li>
            Session {i + 1}: Started at {new Date(
              session.startTime
            ).toLocaleTimeString()}
            | Ended at {new Date(session.endTime).toLocaleTimeString()} |
            Duration: {formatTime(session.duration)}
          </li>
        {/each}
      </ul>
    </div>
  {/if}
</div>

<style>
  .work-timer-container {
    font-family: sans-serif;
    border: 1px solid #ccc;
    padding: 20px;
    border-radius: 8px;
    max-width: 400px;
    margin: 20px auto;
    text-align: center;
    background-color: #f9f9f9; /* Light background for the container */
    color: #333; /* Darker text color */
  }

  .timer-display {
    font-size: 2.5rem; /* Larger timer display */
    margin-bottom: 20px;
    font-weight: bold;
    color: #555; /* Slightly muted color for the timer */
    background-color: #eee; /* Background for the display itself */
    padding: 10px;
    border-radius: 4px;
  }

  button {
    padding: 10px 20px;
    font-size: 1rem;
    cursor: pointer;
    border: none;
    border-radius: 5px;
    background-color: #28a745; /* Green for start */
    color: white;
    transition: background-color 0.3s ease;
  }

  button:hover {
    opacity: 0.9;
  }

  button.running {
    background-color: #dc3545; /* Red for stop */
  }

  .session-log {
    margin-top: 30px;
    text-align: left;
  }

  .session-log h3 {
    margin-bottom: 10px;
    color: #444;
  }

  .session-log ul {
    list-style: none;
    padding: 0;
  }

  .session-log li {
    background-color: #fff; /* White background for log items */
    border: 1px solid #eee;
    padding: 8px 12px;
    margin-bottom: 5px;
    border-radius: 4px;
    font-size: 0.9rem;
    color: #666; /* Muted text for log details */
  }
</style>
