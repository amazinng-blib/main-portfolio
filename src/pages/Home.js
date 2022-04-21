import React, { useState, useEffect } from "react";
import picture from "../image/person-1.jpg";
import Projects from "../components/Projects";

const Home = () => {
  return (
    <main>
      <section className="home-container">
        <div>
          <h2 className="heading">
            welcome to my portfolio<span className="span">!!!</span>
          </h2>
        </div>
        <div className="img-container">
          <img src={picture} alt="Ernest picture" />
        </div>
        <div className="name-job">
          <h4>nwankwo ernest onyebuchi</h4>
          <p className="text blink">front-end web dev</p>
        </div>
        <div className="skills-container">
          <h2>skills</h2>

          <table>
            <tr>
              <td>html</td>
              <td>css</td>
              <td>javaScript</td>
            </tr>
            <tr>
              <td>bootstrap</td>
              <td>react</td>
            </tr>
          </table>
        </div>
        <section className="projects">
          <h2>projects</h2>
          <Projects />
        </section>
      </section>
    </main>
  );
};

export default Home;
