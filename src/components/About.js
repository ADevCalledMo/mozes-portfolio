import React from "react";

const About = () => {
  return (
    <div className="s2">
      <div className="main-container">
        <div className="about-wrapper">
          <div className="about-me">
            <div id="more-about-me">
              <h3> More About Me: </h3>

              <p>
                Hello, my name is Mozes. I am self-taught Front-End Web
                Developer based in Nottingham, United Kingdom. I really enjoy
                making websites, learning new technologies and brushing up on
                existing skills. Please take a look at my previous work below
                and don't hesitate to contact me if you are interested hiring
                me.
              </p>
              <p>
                <a href="https://buzzcv.com/cv/temc4qceyj3p/temc4qceyj3p" target="_blank">Download CV</a>
              </p>
              <h3> What I work with: </h3>
            </div>
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
