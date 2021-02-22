import React from "react";
import profilePic from "../images/Mozes.png";

const Landing = () => {
  return (
    <section className="s1">
      <div className="main-container">
        <div className="greeting-wrapper">
          <h1>Hi, I'm Mozes...</h1>
        </div>

        <div className="intro-wrapper">
          <div className="nav-wrapper">
            <div className="dots-wrapper">
              <div id="dot-1" className="browser-dot"></div>
              <div id="dot-2" className="browser-dot"></div>
              <div id="dot-3" className="browser-dot"></div>
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
    </section>
  );
};

export default Landing;
