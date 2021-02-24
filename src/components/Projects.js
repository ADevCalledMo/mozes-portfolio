import React from "react";
import codePic from '../images/code.jpg';

const Projects = () => {
  return (
    <div className="main-container">
      <h1 style={{ textAlign: "center" }}> Some of my past projects: </h1>
      <div className="projects">
        <div className="post">
        <img className="thumbnail" src={codePic} />
          <div className="post-preview">
            <h5 className="post-title">Brain Scanner App</h5>
            <p className="post-intro">This is a sentence</p>
          </div>
        </div>
        <div className="post">
        <img className="thumbnail" src={codePic} />
          <div className="post-preview">
            <h5 className="post-title">Covid-19 Tracker App</h5>
            <p className="post-intro">This is a sentence</p>
          </div>
        </div>
        <div className="post">
        <img className="thumbnail" src={codePic} />
          <div className="post-preview">
            <h5 className="post-title">Gatsby.js Blog</h5>
            <p className="post-intro">This is a sentence</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
