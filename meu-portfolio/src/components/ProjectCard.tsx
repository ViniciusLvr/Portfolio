import type { Project } from '../data/projects'

type Props = {
  project: Project
}

export default function ProjectCard({ project }: Props) {
  const isComingSoon = project.comingSoon ?? false

  return (
    <article className="project-card">
      <div className="project-card__header">
        <h3 className="project-card__title">{project.title}</h3>
        {isComingSoon && <span className="badge">Em breve</span>}
      </div>

      <p className="project-card__description">{project.description}</p>

      {project.technologies?.length ? (
        <ul className="project-card__tech">
          {project.technologies.map((tech) => (
            <li key={tech} className="project-card__techItem">
              {tech}
            </li>
          ))}
        </ul>
      ) : null}

      <div className="project-card__actions">
        {project.demoUrl ? (
          <a
            href={project.demoUrl}
            className="button button--ghost"
            target="_blank"
            rel="noreferrer"
          >
            Ver demo
          </a>
        ) : isComingSoon ? (
          <span className="button button--ghost button--disabled">Ver demo</span>
        ) : null}

        {project.codeUrl ? (
          <a
            href={project.codeUrl}
            className="button button--ghost"
            target="_blank"
            rel="noreferrer"
          >
            Código
          </a>
        ) : null}
      </div>
    </article>
  )
}
