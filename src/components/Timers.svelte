<!-- Timers.svelte -->
<script lang="ts">
  import Timer from "./Timer.svelte";
  import { onMount, onDestroy } from "svelte";
  import { v4 as uuid4 } from "uuid";

  let timers: any[] = [];
  let timeAsText = "";
  $: timeAsTextNumberOnly =
    timeAsText.replace(/[^0-9]/g, "").length > 1 ? "nice" : "not";
  // Main app component

  function addTimer() {
    timers = [
      ...timers,
      {
        id: uuid4(),
        duration: 0,
        dateAdded: Date.now(),
      },
    ];
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
  <h1>{timeAsText}</h1>
  <h1>{timeAsTextNumberOnly}</h1>
  <input class="time-input" type="text" bind:value={timeAsText} />
  <div class="add-timer">
    <button on:click={addTimer}>Add Timer</button>
  </div>

  <h4>
    You have {timers.length} timer{#if timers.length != 1}s{/if} running currently
  </h4>

  <div class="timers">
    {#each timers as timer}
      <Timer
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
  .time-input {
    height: min-content;
    font-size: 2rem;
    width: min-content;
    border: none;
    box-shadow: 0 0 4px 1px red;
    text-align: center;
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
    background-color: transparent;
    border: none;
    color: rgb(151, 0, 0);
    border-bottom: 1px transparent solid;
  }
  .clear-button:hover {
    cursor: pointer;
    color: red;
  }
</style>
