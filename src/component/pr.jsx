const Project = ({ project }) => {
  return (
    <div className="card project-card">
      <img src={project.img} className="card-img-top" alt="..." />
      <div className="card-body">
        <h3>{project.name}</h3>
        <p>{project.description}</p>
        <p>
          <strong>Technologies:</strong> {project.technologies.join(", ")}
        </p>
      </div>
      <div className="buttons">
        <a href={project.demoLink} className="btn btn-primary" target="_blank">
          View Demo
        </a>
        <a
          href={project.codeLink}
          className="btn btn-secondary"
          target="_blank"
        >
          View Code
        </a>
      </div>
    </div>
  );
};

export default Project;
