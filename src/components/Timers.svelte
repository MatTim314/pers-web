<!-- Timers.svelte -->
<script lang="ts">
  import Timer from './Timer.svelte';
  import { onMount, onDestroy } from 'svelte';

  let timers : any[]= [];

  // Main app component
  let newTimerName = '';
  let newTimerId = 1;
  let newTimerHours : number;
  let newTimerMinutes : number;
  let newTimerSeconds : number;

  function addTimer() {
    timers = [
      ...timers,
      {
        id: newTimerId,
        name: newTimerName,
        duration: ((newTimerHours ? newTimerHours : 0) * 60 * 60) + ((newTimerMinutes ? newTimerMinutes : 0) * 60) + (newTimerSeconds ? newTimerSeconds : 0)
      }
    ];
    newTimerId += 1;
    newTimerName = '';
    saveTimers()
  }

  // Clears timers array
  function clearTimers(){
    timers = []
    newTimerId = 0;
  }

  function deleteTimer(event : any){
    timers = timers.filter((timer) => timer.id !== event.detail.id)
  }
  // Save timers to localStorage
  function saveTimers() {
    localStorage.setItem('timers', JSON.stringify(timers));
  }

  // Load timers from localStorage
  function loadTimers() {
    const savedTimers = localStorage.getItem('timers');
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
    <input type="text" bind:value={newTimerName} placeholder="Timer name" />
    <input type="text" bind:value={newTimerHours} placeholder="Hours" />
    <input type="text" bind:value={newTimerMinutes} placeholder="Minutes" />
    <input type="text" bind:value={newTimerSeconds} placeholder="Seconds" />
    <button on:click={addTimer}>Add Timer</button>
    <button on:click={clearTimers}>Clear timers</button>
  </div>

  <h4>You have {timers.length} timer{#if timers.length != 1}s{/if} running currently</h4>  

  <div class="timers">
    {#each timers as timer}
    <Timer name={timer.name} id={timer.id} timerDuration={timer.duration} on:remove={deleteTimer}/>
    {/each}
  </div>
  


    


</main>

<style>
  input {
    width: 5rem;
  }

  .timers{
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
</style>