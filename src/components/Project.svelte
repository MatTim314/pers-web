<script lang="ts">
  export let description: string;
  export let name: string;
  export let imageSource: string;
  export let coverSource: string;
  export let link: string



  function redirect(){
    window.location.assign(link)
  }
</script>

<div class="project" style="cursor: pointer;" on:click={ redirect} on:keydown={redirect}>
  <div class="left-side">
    <span class="name">{name}</span>
    <span class="description">{description}</span>
  </div>
  <div class="right-side">
    <img src={imageSource} alt="" />
    <img class="cover" src={coverSource} alt="" />
  </div>
</div>


<style>
  .cover {
    position: absolute;
    object-position: 0 0;
  }
  .cover:hover {
    opacity: 0;
  }
    .project:hover{
        transform: translate(0, -3px);
        background-color: #172033;
        transition: background-color 150ms ease-in, transform 150ms ease-in-out;
        box-shadow: 1px 1px 5px black;
    }

    .project:focus-visible{
      
    }
  .project {
    display: grid;
    grid-template-columns: 50% 50%;
    place-items: stretch;
    gap: 1rem;

    background-color: #0E131F;
    border-radius: 10px;
    width: 50%;
    cursor: pointer;
    min-height: 300px;
  }
  .description {
    color: #92828D;
  }
  .name {
    font-size: 2rem;
    font-family: inherit;
  }
  .left-side{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    gap: 5rem;
    margin: 1rem;
    padding: 0.5rem;
  }
  .right-side{
    position: relative;
    display: flex;
    justify-content: center;
    margin: 1rem;
  }
  .right-side >  img {
    flex-shrink: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    outline: 1px #92828D solid;
    border-radius: 5px;
    margin-right: 2rem;
  }


</style>
