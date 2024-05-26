import { NavLink } from "react-router-dom";
import "./ProjectItem.css";

export default function ProjectItem({ title, img, id }) {
  return (
    <NavLink to={`/project/${id}`}>
      <li className="project">
        <img src={img} alt={title} className="project__img" />
        <h3 className="project__title">{title}</h3>
      </li>
    </NavLink>
  );
}
