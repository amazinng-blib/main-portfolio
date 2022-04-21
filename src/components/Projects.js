import React from "react";
import { projects } from "../data";
const Projects = () => {
  return (
    <section className="projects-section">
      <div className="projects-container">
        {projects.map((item) => {
          const { id, name, img, site, src } = item;
          return (
            <div>
              <a href={site} key={id}>
                <img src={img} alt={name} />
              </a>
              <h4 className="projects-name">{name}</h4>
              <a href={src}>
                <button className="btn">source code</button>
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
