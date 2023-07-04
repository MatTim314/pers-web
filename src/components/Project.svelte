<script lang="ts">
  export let description: string;
  export let name: string;
  export let imageSource: string;
</script>

<div class="project">
  <div class="left-side">
    <span class="name">{name}</span>
    <span class="description">{description}</span>
  </div>
  <div class="right-side">
    <img src={imageSource} alt="" />
  </div>
</div>

<style>

    .project:hover{
        transform: translate(0, -3px);
        background-color: #172033;
        transition: background-color 150ms ease-in, transform 150ms ease-in-out;;
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
    display: flex;
    justify-content: center;
    margin: 1rem;
  }
  .right-side >  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    outline: 1px #92828D solid;
    border-radius: 5px;
    margin-right: 1rem;
  }


</style>
