import React from "react";
import Typed from "react-typed";
import profilePic from "../images/Mozes.png";

const Landing = () => {
  return (
    <div className="s1">
      <div className="main-container">
        <div className="greeting-wrapper">
          <Typed
            className="typed-text"
            strings={["Hi, I'm Mozes...", " I am a Web Developer"]} 
            typeSpeed={40}
            backSpeed={30}
            loop
          />
        </div>

        <div className="intro-wrapper">
          <div className="nav-wrapper">
            <div className="dots-wrapper">
              <div id="dot-1" className="browser-dot"></div>
              <div id="dot-2" className="browser-dot"></div>
              <div id="dot-3" className="browser-dot"></div>
            </div>
            <div id="links">
              <li><a href="https://www.linkedin.com/in/mozeswalker/" target="_blank">LinkedIn</a></li>
              <li><a href="mailto: mozeswalker@outlook.com">Send me an Email!</a></li>

            </div>
          </div>
          <div className="left-column">
            <img
              id="ProfilePic"
              className="center-block"
              src={profilePic}
              alt="profile"
            />
          </div>
          <div className="right-column">
            <div id="preview-shadow">
              <div id="preview">
                <div id="corner-tl" class="corner"></div>
                <div id="corner-tr" class="corner"></div>
                <h3>What I Do</h3>
                <p>
                  {" "}
                  I am a self taught Web Developer with a passion for learning
                  new things and fixing problems.
                </p>
                <div id="corner-bl" class="corner"></div>
                <div id="corner-br" class="corner"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
