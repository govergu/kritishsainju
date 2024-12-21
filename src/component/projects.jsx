import { useContext } from "react";
import Project from "./pr";

import ProjectContext from "../store/store.jsx";

const Projects = () => {
  const { projects, dispatch } = useContext(ProjectContext);
  const limitedProjects = projects.slice(0, 5);
  return (
    <div className="projects" id="projects">
      <h1>Projects</h1>
      {limitedProjects.map((project, index) => (
        <Project key={index} project={project} />
      ))}

      <button
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#project-modal"
        onClick={() => dispatch({ type: "VIEWMORE" })}
      >
        View more
      </button>
    </div>
  );
};

export default Projects;
