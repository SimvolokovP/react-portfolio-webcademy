import ProjectItem from "../../components/ProjectItem/ProjectItem";
import { projects } from "../../helpers/projectsList";

export default function ProjectsPage() {
  return (
    <main className="section">
      <div className="container">
        <h2 className="title-1">Projects</h2>
        <ul className="projects">
          {projects.map((oneProject) => (
            <ProjectItem key={oneProject.title} title={oneProject.title} img={oneProject.img} id={oneProject.id} />
          ))}
        </ul>
      </div>
    </main>
  );
}
