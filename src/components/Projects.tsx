import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section className="section section--accent" id="projetos">
      <div className="section__inner">
        <div className="section__header">
          <h2>Projetos</h2>
          <p>
            Uma coleção de ideias e experimentos. Alguns já estão online, outros
            estão em desenvolvimento (mas estão a caminho!).
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
