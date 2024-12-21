import { useContext } from "react";
import ProjectContext from "../store/store";
import { IoCloseCircle } from "react-icons/io5";

const ViewProjects = () => {
  const { projects, dispatch } = useContext(ProjectContext);
  return (
    <>
      <div className="project-view-more">
        <div className="top">
          <h1>Projects</h1>{" "}
          <a onClick={() => dispatch({ type: "CLOSE" })}>
            <IoCloseCircle />
          </a>
        </div>
        <div className="project-items">
          {projects.map((project, index) => (
            <div className="project-item" key={index}>
              <img src={project.img} alt="" />
              <div className="info">
                <p>{project.name}</p>
                {project.technologies}
              </div>
              <div className="butns">
                <a
                  href={project.demoLink}
                  className="btn btn-primary demo"
                  target="_blank"
                >
                  Demo
                </a>
                <a
                  href={project.codeLink}
                  className="btn btn-secondary"
                  target="_blank"
                >
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ViewProjects;
