import React, { createContext, useReducer } from "react";

const projectReducer = (state, action) => {
  switch (action.type) {
    case "VIEWMORE":
      return (state = true);
    case "CLOSE":
      return (state = false);
  }
};
const projects = [
  {
    name: "Recipe Finder",
    description: "Search for recipes using Edamam API with dynamic results.",
    technologies: ["React", "API", "CSS", "Bootstrap"],
    demoLink: "https://recipe-finder-vert-ten.vercel.app/",
    codeLink: "https://github.com/govergu/recipe-finder.git",
    img: "recipe.png",
  },

  {
    name: "Weather App",
    description: "Fetch real-time weather data using OpenWeatherMap API.",
    technologies: ["React", "CSS", "API", "Bootstrap"],
    demoLink: "https://weather-app-pearl-xi-27.vercel.app/",
    codeLink: "https://github.com/govergu/weather-app.git",
    img: "weatherapp.png",
  },

  {
    name: "Mymedia",
    description:
      "A demo project that shows how the social media post are fetched in our device",
    technologies: ["React", "CSS", "JS", "Bootstrap", "API"],
    demoLink: "https://mymedia-d1gl8jyxy-kritish-sainjus-projects.vercel.app/",
    codeLink: "https://github.com/govergu/mymedia.git",
    img: "mymedia.png",
  },

  {
    name: "Todo App",
    description: "Create, edit, and delete tasks with local storage.",
    technologies: ["React", "CSS", "JS", "Bootstrap"],
    demoLink: "https://todo-app-kappa-gilt-53.vercel.app/",
    codeLink: "https://github.com/govergu/todo_app.git",
    img: "todo.png",
  },

  {
    name: "Clock",
    description: "regular clock with react",
    technologies: ["React", "API", "CSS", "Bootstrap"],
    demoLink: "https://clock-xi-woad.vercel.app/",
    codeLink: "https://github.com/govergu/clock.git",
    img: "clock.png",
  },
  {
    name: "Recipe Finder",
    description: "Search for recipes using Edamam API with dynamic results.",
    technologies: ["React", "API", "CSS", "Bootstrap"],
    demoLink: "https://recipe-finder-vert-ten.vercel.app/",
    codeLink: "https://github.com/govergu/recipe-finder.git",
    img: "recipe.png",
  },
  {
    name: "Recipe Finder",
    description: "Search for recipes using Edamam API with dynamic results.",
    technologies: ["React", "API", "CSS", "Bootstrap"],
    demoLink: "https://recipe-finder-vert-ten.vercel.app/",
    codeLink: "https://github.com/govergu/recipe-finder.git",
    img: "recipe.png",
  },
  {
    name: "Recipe Finder",
    description: "Search for recipes using Edamam API with dynamic results.",
    technologies: ["React", "API", "CSS", "Bootstrap"],
    demoLink: "https://recipe-finder-vert-ten.vercel.app/",
    codeLink: "https://github.com/govergu/recipe-finder.git",
    img: "recipe.png",
  },
  {
    name: "Recipe Finder",
    description: "Search for recipes using Edamam API with dynamic results.",
    technologies: ["React", "API", "CSS", "Bootstrap"],
    demoLink: "https://recipe-finder-vert-ten.vercel.app/",
    codeLink: "https://github.com/govergu/recipe-finder.git",
    img: "recipe.png",
  },
];
const ProjectContext = createContext();

// Provider component
export const ProjectProvider = ({ children }) => {
  const [viewmoreProject, dispatch] = useReducer(projectReducer, false);

  return (
    <ProjectContext.Provider value={{ projects, dispatch, viewmoreProject }}>
      {children}
    </ProjectContext.Provider>
  );
};
export default ProjectContext;
