import React from "react";
import codePic from "../images/code.jpg";
import covid19 from '../images/Covid19.png';
import aBlogFromMozes from '../images/ABlogFromMozes.png';
import brainScanner from '../images/BrainScanner.png';

const Projects = () => {
  return (
    <div className="main-container">
      <h1 style={{ textAlign: "center" }}> Some of my past projects: </h1>
      <div className="projects">
        <div className="post">
          <img className="thumbnail" src={brainScanner} />
          <div className="post-preview">
            <h5 className="post-title">Brain Scanner App</h5>
            <p className="post-intro">
              This app uses an external API to scan a photo and see if it
              contains a face. The users score will be updated by one when the
              app successfully finds a face. There is a simple login system
              aswell. Technologies used: React.js, PostgreSQL, HTML, CSS.
            </p>
          </div>
        </div>
        <div className="post">
          <img className="thumbnail" src={covid19} />
          <div className="post-preview">
            <h5 className="post-title">Covid-19 Tracker App</h5>
            <p className="post-intro">
              The Covid-19 crisis has affected us all. I built a simple website
              to showcase the numbers of people affected by this virus
              (infected, recovered and deceased) - the data is from an API and
              updated daily. Technologies used: REACT.js , Chart.js, HTML, CSS.{" "}
            </p>
          </div>
        </div>
        <div className="post">
          <img className="thumbnail" src={aBlogFromMozes} />
          <div className="post-preview">
            <h5 className="post-title">Gatsby.js Blog</h5>
            <p className="post-intro">
              I used Gatsby.js and Contentful to create a blog for myself with
              the purpose of documenting what I am currently learning as a
              self-taught web developer. Technologies used: React, Gatsby.js,
              Contentful
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
