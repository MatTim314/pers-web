<script lang="ts">
    import Project from "./Project.svelte";
</script>

<div class="projects">
<span class="header">Projects</span >
<Project 
      name={"To Build a Fire"}
      description={"This was a school project done in C++ from scratch using only OpenGL library. Main purpose was to get familiar with rendering methods, lightning models and optimalization. Result was a glooming game about not freezing to death."}
      imageSource={'/lk.gif'}
      coverSource={'/fire-cover.png'}
      link={"https://github.com/MatTim314/to-build-a-fire/tree/main"}/>

      <Project 
      name={"Acolyte"}
      description={"Simple side project done in Python using tkinter library. Idea was to simulate playing Dota 2's Invoker hero."}
      imageSource={'/acolyte.gif'}
      coverSource={'/acolyte-cover.png'}
      link={"https://github.com/MatTim314/acolyte"}/>

      <Project 
      name={"Github GET"}
      description={"Simple wrapper around Github to extract information about users and their repositories"}
      imageSource={'/githubget.png'}
      coverSource={''}
      link={"https://github.com/MatTim314/github-get"}/>
    
</div>

<style>
    .projects{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 2rem;
    }
    .header {
        
        font-size: 3rem;
    }
    
</style>