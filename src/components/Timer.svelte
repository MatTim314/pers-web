<!-- Timer.svelte -->
<script lang="ts">
  import Cross from '../assets/Cross.svelte'
  import { onMount, onDestroy, createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();

  export let name :string;
  export let id : number;
  export let timerDuration: number; // in seconds
  export let dateAdded: number; // in miliseconds

  let time = Math.floor(( timerDuration * 1000 - (Date.now() - dateAdded)) / 1000);

  $: hours = Math.floor((time / 60 / 60));
  $: minutes = Math.floor((time - hours * 3600) / 60);
  $: seconds = Math.floor(time % 3600 %60)
  let interval : any;

  function removeThis(){
    dispatch('remove', {
      id: id
    })
  }
  
  function startTimer() {
    interval = setInterval(() => {
      time--;
      if (time <= 0){
        removeThis()
      }
    }, 1000);
  }

  function stopTimer() {
    clearInterval(interval);
  }

  onMount(() => {
    startTimer();
  });

  onDestroy(() => {
    stopTimer();
  });

</script>

<div class='wrap'>
  
    {#if !Boolean(name)}
      {timerDuration} second{#if timerDuration>1}s{/if} timer
    {:else}
      <h1>{name} </h1>
    {/if}

  <span>{hours} hours</span>
  <span>{minutes} minutes</span>
  <span>{seconds} seconds left</span>
  <div class="cross" on:click={removeThis} on:keydown={removeThis}>
    <Cross />
  </div>
</div>

<style>
  .cross {
    position: absolute;
    top: 0;
    right: 0;
    width: 1rem;
    height: 1rem;
    margin: 0.2rem;
  }
  .wrap {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: start;
    position: relative;
    padding: 1rem;
    border-left: 2px cyan solid;
    background-color: azure;
  }
</style>
