<script lang="ts">
  export let description: string;
  export let name: string;
  export let imageSource: string;
  export let coverSource: string;
  export let link: string;
  export let tags: string[] | undefined = [];

</script>

<!-- Use an anchor tag for semantics and accessibility -->
<!-- target="_blank" opens in new tab, rel="noopener noreferrer" is for security -->
<a
  href={link}
  target="_blank"
  rel="noopener noreferrer"
  class="project-card"
  aria-label={`View project: ${name}`}
>
  <div class="image-container">
    <img class="main-image" src={imageSource} alt={`Preview of ${name}`} />
    {#if coverSource}
      <!-- Conditionally render cover -->
      <img class="cover-image" src={coverSource} alt="" aria-hidden="true" />
      <!-- aria-hidden as it's decorative -->
    {/if}
  </div>
  <div class="content">
    <span class="name">{name}</span>
    <p class="description">{description}</p> {#if tags && tags.length > 0}
      <div class="tags">
        {#each tags as tag}
          <span class="tag">{tag}</span>
        {/each}
      </div>
    {/if}
  </div>
</a>

<style>
  .project-card {
    display: flex;
    flex-direction: column;
    background-color: #1a202c; /* Slightly lighter card background */
    border-radius: 8px;
    overflow: hidden; /* Keep image corners rounded */
    text-decoration: none; /* Remove underline from link */
    color: inherit; /* Inherit text color */
    transition:
      transform 150ms ease-in-out,
      box-shadow 150ms ease-in-out;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  }

  .project-card:hover,
  .project-card:focus-visible {
    /* Apply hover/focus styles */
    transform: translateY(-5px);
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.3);
    outline: 2px solid #4a5568; /* Focus outline */
    outline-offset: 2px;
  }
   .project-card:focus-visible {
     background-color: #2d3748; /* Slightly different focus background */
   }

  .image-container {
    position: relative;
    width: 100%;
    aspect-ratio: 16 / 9; /* Maintain aspect ratio */
    background-color: #2d3748; /* Placeholder background */
  }

  .main-image,
  .cover-image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: opacity 200ms ease-in-out;
  }

  .cover-image {
    opacity: 1; /* Cover is initially visible */
  }

  .project-card:hover .cover-image,
  .project-card:focus-visible .cover-image {
    opacity: 0; /* Hide cover on hover/focus */
  }

  .content {
    padding: 1rem 1.5rem;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    flex-grow: 1; /* Allow content to grow if cards have different heights */
  }

  .name {
    font-size: 1.5rem;
    font-weight: 700;
    color: #ffffff;
  }

  .description {
    color: #a0aec0; /* Softer description color */
    font-size: 0.95rem;
    line-height: 1.5;
    flex-grow: 1; /* Push tags down */
    margin: 0; /* Remove default paragraph margin */
  }

  .tags {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
      margin-top: auto; /* Push tags to the bottom */
      padding-top: 0.5rem;
  }

  .tag {
      background-color: #4a5568; /* Tag background */
      color: #e2e8f0; /* Tag text color */
      padding: 0.25rem 0.6rem;
      border-radius: 4px;
      font-size: 0.75rem;
      font-weight: 600;
  }
</style>
