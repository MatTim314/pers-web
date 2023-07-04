<script lang="ts">
    import Project from "./Project.svelte";
</script>

<div class="projects">
    
<Project 
      name={"To build a fire"}
      description={"This was a school project done in C++ from scratch using only OpenGL library. Main purpose was to get familiar with rendering methods, lightning models and optimalization."}
      imageSource={'/lk.gif'}/>
      <Project 
      name={"Acolyte"}
      description={"Simple side project done in Python using tkinter library. Idea was to simulate playing Dota 2's Invoker hero"}
      imageSource={'/lk.gif'}/>
      <Project 
      name={"To build a fire"}
      description={"This was a school project done in C++ from scratch using only OpenGL library. Main purpose was to get familiar with rendering methods, lightning models and optimalization."}
      imageSource={'/lk.gif'}/>
    
</div>

<style>
    .projects{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 2rem;
    }
</style>