// import React from "react";
import { Outlet, Link } from "react-router-dom";
import "./style.css";
import project01 from "./project01.jpg";
import j from "./../Card/Astar/j.jpg";
import ak from "./../Card/Akjol/ak.jpg";
import Project04 from "./Project04.jpg";
import Project05 from "./Project05.jpg";

export default function Projects() {
  return (
    <main className="section">
      <h1 className="title-1">БИЗ ЖӨНҮНДӨ</h1>
      <div className="projects">
        <div>
          <img className="project_img" src={project01} alt="Project 01" />
          <br />
          <Link to="Kuttubek" className="project_title">
            Куттубек
          </Link>
          <Outlet />
        </div>
        <div>
          <img className="project_img" src={j} alt="Project 02" />
          <br />
          <Link to="Astar" className="project_title">
            Жылдыз
          </Link>
          <Outlet />
        </div>
        <div>
          <img className="project_img" src={ak} alt="Project 03" />
          <br />
          <Link to="Akjol" className="project_title">
            Акжол
          </Link>
          <Outlet />
        </div>
        <div>
          <img className="project_img" src={Project04} alt="Project 04" />
          <br />
          <Link to="Albina" className="project_title">
            Альбина
          </Link>
          <Outlet />
        </div>
        <div>
          <img className="project_img" src={Project05} alt="Project 05" />
          <br />
          <Link to="Asema" className="project_title">
            Асема
          </Link>
          <Outlet />
        </div>
      </div>
    </main>
  );
}
