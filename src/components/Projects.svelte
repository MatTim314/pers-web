<script lang="ts">
    import Project from "./Project.svelte";
  
    // Accept projects array as a prop
    export let projects: Array<{
      id: string;
      name: string;
      description: string;
      imageSource: string;
      coverSource: string;
      link: string;
      tags?: string[];
    }> = [];
  </script>
  
  <div class="projects-container">
    <span class="header">Projects</span>
    <div class="projects-list">
      {#each projects as project (project.id)}
        <Project
          name={project.name}
          description={project.description}
          imageSource={project.imageSource}
          coverSource={project.coverSource}
          link={project.link}
          tags={project.tags}
        />
      {/each}
    </div>
  </div>
  
  <style>
    .projects-container {
      display: flex;
      flex-direction: column;
      align-items: center; /* Or stretch if you want full width */
      gap: 2rem; /* Gap between header and list */
      width: 100%; /* Take full width */
      margin-top: 4rem; /* Add space above the section */
      margin-bottom: 4rem; /* Add space below the section */
    }
    .header {
      font-size: 2.5rem; /* Slightly smaller header */
      font-weight: 700;
      margin-bottom: 1rem;
      color: #ffffff; /* Brighter header color */
    }
    .projects-list {
      display: grid; /* Use grid for better alignment */
      grid-template-columns: repeat(auto-fit, minmax(400px, 1fr)); /* Responsive grid */
      gap: 2rem;
      width: 100%;
    }
  
    /* Adjust grid for smaller screens */
     @media (max-width: 900px) {
       .projects-list {
          grid-template-columns: 1fr; /* Stack on smaller screens */
       }
     }
  </style>
  