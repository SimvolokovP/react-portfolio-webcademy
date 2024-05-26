import GitLink from "../../components/GitLink/GitLink";
import bigImg from "../../assets/img/projects/01-big.jpg";
import { useParams } from "react-router-dom";
import { projects } from "../../helpers/projectsList";

export default function OneProjectPage() {
  const targetId = useParams();
  const targetProject = projects.find((project) => project.id === +targetId.id);
  return (
    <main className="section">
      <div className="container">
        <div className="project-details">
          <h1 className="title-1">{targetProject.title}</h1>
          <img src={targetProject.imgBig} alt={targetProject.title} className="project-details__cover" />
          <div className="project-details__desc">
            <p>Skills: {targetProject.skills}</p>
          </div>
          {targetProject.gitHubLink && <GitLink link={targetProject.gitHubLink} />}
        </div>
      </div>
    </main>
  );
}
