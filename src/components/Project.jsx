function Project({ title, image, appLink, githubLink }) {
    return (
      <div className="project">
        <div className="project-image-container">
          <img src={image} alt={title} className="project-image" />
          <div className="project-info">
            <h3>{title}</h3>
            <div className="project-links">
              <a href={appLink} target="_blank" rel="noopener noreferrer">Live App</a>
              <a href={githubLink} target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
          </div>
        </div>
      </div>
    );
  }

export default Project;