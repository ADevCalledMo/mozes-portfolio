import React from "react";

const About = () => {
  return (
    <div className="s2">
      <div className="main-container">
        <div className="about-wrapper">
          <div className="about-me">
            <h4> More About Me</h4>

            <p> ADD INFOMATION HERE</p>

            <p> ADD MORE INFOMATION HERE</p>

            <h4> My Knowledge: </h4>
            <p>
              Self-taught Web Developer with a focus on HTML, CSS, Javascript
              and React: <a href="CV.pdf">Download CV</a>
            </p>

            <div id="skills">
              <ul>
                <li>Javascript</li>
                <li>React</li>
                <li>HTML/CSS</li>
                <li>Postgres</li>
              </ul>

              <ul>
                <li>Gatsby.js</li>
                <li>Heroku</li>
                <li>Bootstrap</li>
                <li>Chart.js</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
