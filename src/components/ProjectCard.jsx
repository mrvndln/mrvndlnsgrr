export default function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <h3>{project.title}</h3>
      <p>{project.description}</p>

      <div className="project-tech">
        {project.tech.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>

      <a href={project.link} target="_blank" rel="noreferrer">
        View Project
      </a>
    </article>
  );
}
