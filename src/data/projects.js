// src/data/projects.js
export default [
    {
      id: "fire", // Unique ID
      name: "To Build a Fire",
      description:
        "This was a school project done in C++ from scratch using only OpenGL library. Main purpose was to get familiar with rendering methods, lightning models and optimalization. Result was a glooming game about not freezing to death.",
      imageSource: "/lk.gif",
      coverSource: "/fire-cover.png",
      link: "https://github.com/MatTim314/to-build-a-fire/tree/main",
      tags: ["C++", "OpenGL", "Game Dev"], // Optional: Add tags
    },
    {
      id: "acolyte",
      name: "Acolyte",
      description:
        "Simple side project done in Python using tkinter library. Idea was to simulate playing Dota 2's Invoker hero.",
      imageSource: "/acolyte.gif",
      coverSource: "/acolyte-cover.png",
      link: "https://github.com/MatTim314/acolyte",
      tags: ["Python", "Tkinter", "Tool"],
    },
    {
      id: "github-get",
      name: "Github GET",
      description:
        "Simple wrapper around Github to extract information about users and their repositories",
      imageSource: "/githubget.png",
      coverSource: "", // Handle empty cover source in component
      link: "https://github.com/MatTim314/github-get",
      tags: ["API", "Web", "Tool"],
    },
    // Add more projects here
  ];
  