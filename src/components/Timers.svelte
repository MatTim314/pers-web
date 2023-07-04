<!-- Timers.svelte -->
<script lang="ts">
  import Timer from "./Timer.svelte";
  import { onMount, onDestroy } from "svelte";
  import { v4 as uuid4 } from "uuid";

  let timers: any[] = [];
  // Main app component
  let newTimerDescription = "";
  let newTimerHours: number;
  let newTimerMinutes: number;
  let newTimerSeconds: number;

  function resetInputs() {
    newTimerDescription = "";
    newTimerMinutes = 0;
    newTimerSeconds = 0;
    newTimerHours = 0;
  }
  function addTimer() {
    timers = [
      ...timers,
      {
        id: uuid4(),
        name: newTimerDescription,
        duration:
          (newTimerHours ? newTimerHours : 0) * 60 * 60 +
          (newTimerMinutes ? newTimerMinutes : 0) * 60 +
          (newTimerSeconds ? newTimerSeconds : 0),
        dateAdded: Date.now(),
      },
    ];
    resetInputs();
    saveTimers();
  }

  // Clears timers array
  function clearTimers() {
    timers = [];
    saveTimers();
  }

  function deleteTimer(event: any) {
    timers = timers.filter((timer) => timer.id !== event.detail.id);
    saveTimers();
  }
  // Save timers to localStorage
  function saveTimers() {
    localStorage.setItem("timers", JSON.stringify(timers));
  }

  // Load timers from localStorage
  function loadTimers() {
    const savedTimers = localStorage.getItem("timers");
    if (savedTimers) {
      timers = JSON.parse(savedTimers);
    }
  }
  onMount(() => {
    loadTimers();
  });

  onDestroy(() => {
    saveTimers();
  });
</script>

<main>
  <div class="add-timer">
    <div class="labeled-input-box">
      <p>Description</p>
      <input
        type="text"
        bind:value={newTimerDescription}
        placeholder="Description"
      />
    </div>
    <div class="labeled-input-box">
      <p>Hours</p>
      <input type="text" bind:value={newTimerHours} placeholder="Hours" />
    </div>
    <div class="labeled-input-box">
      <p>Minutes</p>
      <input
        type="text"
        bind:value={newTimerMinutes}
        placeholder="Minutes"
      />
    </div>
    <div class="labeled-input-box">
      <p>Seconds</p>
      <input
        type="text"
        bind:value={newTimerSeconds}
        placeholder="Seconds"
      />
    </div>
    <button on:click={addTimer}>Add Timer</button>
  </div>

  <h4>
    You have {timers.length} timer{#if timers.length != 1}s{/if} running currently
  </h4>

  <div class="timers">
    {#each timers as timer}
      <Timer
        description={timer.name}
        id={timer.id}
        timerDuration={timer.duration}
        dateAdded={timer.dateAdded}
        on:remove={deleteTimer}
      />
    {/each}
  </div>
  <button class="clear-button" on:click={clearTimers}>Delete all timers</button>
</main>

<style>
  input {
    width: 5rem;
  }

  .timers {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .add-timer {
    margin-top: 1rem;
    display: flex;
    justify-content: center;
    gap: 1rem;
  }

  .clear-button {
    margin: 1rem;
    background-color: white;
    border: none;
    color: rgb(151, 0, 0);
    border-bottom: 1px transparent solid;
    transition: all 0.3s ease;
  }
  .clear-button:hover {
    cursor: pointer;
    color: red;
  }
</style>
