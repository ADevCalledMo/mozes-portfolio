import React, { Component } from "react";
import Particles from "react-particles-js";
import Navigation from "./components/Navigation";
import Landing from "./components/Landing";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Particles className="particles"
          params={{
            particles: {
              color: {
                value: "#000000"
              },
              line_linked: {
                color: {
                  value: "#000000"
                }
              },
              number: {
                value: 50
              },
              size: {
                value: 3
              }
            }
          }}
        />
        <Navigation />
        <Landing />
      </div>
    );
  }
}

export default App;
