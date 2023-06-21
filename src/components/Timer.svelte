<!-- Timer.svelte -->
<script lang="ts">
  import { onMount, onDestroy, createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();

  export let name :string;
  export let id : number;
  export let timerDuration: number;

  let time = timerDuration;
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

<div>
  <img src="/close_ring_light.svg" on:click={removeThis} />
    {#if !Boolean(name)}
      {timerDuration} second{#if timerDuration>1}s{/if} timer
    {:else}
      {name}
    {/if}

  
  <p>{time} seconds left </p>
</div>

<style>
  img {
    position: absolute;
    top: 0;
    right: 0;
  }
  div {
    display: flex;
    flex-direction: column;
    justify-content: start;
    position: relative;
    padding: 1rem;
    border-left: 2px cyan solid;
    background-color: azure;
  }
</style>
