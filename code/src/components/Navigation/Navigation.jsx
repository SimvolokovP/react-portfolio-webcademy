import "./Navigation.css";
import { NavLink } from "react-router-dom";
import ThemeBtn from "../ThemeBtn/ThemeBtn";

export default function Navigation() {
  return (
    <nav className="nav">
      <div className="container">
        <div className="nav-row">
          <NavLink to={"/"} className="logo">
            <strong>Freelancer </strong>
            Portfolio
          </NavLink>

          <ThemeBtn />

          <ul className="nav-list">
            <li className="nav-list__item">
              <NavLink
                to={"/"}
                className={({ isActive }) => (isActive ? "nav-list__link nav-list__link--active" : "nav-list__link")}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-list__item">
              <NavLink
                to={"/projects"}
                className={({ isActive }) => (isActive ? "nav-list__link nav-list__link--active" : "nav-list__link")}
              >
                Projects
              </NavLink>
            </li>
            <li className="nav-list__item">
              <NavLink
                to={"/contacts"}
                className={({ isActive }) => (isActive ? "nav-list__link nav-list__link--active" : "nav-list__link")}
              >
                Contacts
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
