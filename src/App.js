import React, { Component } from "react";
import Particles from "react-particles-js";
import Navigation from "./components/Navigation";
import Landing from "./components/Landing";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Particles className="particles"
          params={{
            "particles": {
    "number": {
      "value": 200,
      "density": {
        "enable": true,
        "value_area": 2000
      }
    },
    "color": {
      "value": ["#c1c1c1", "#eaeaea"]
    },
    "shape": {
      "type": "polygon",
      "stroke": {
        "width": 0.5,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 4
      }
    },
    "size": {
      "value": 8,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 7,
        "size_min": 4,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 100,
      "color": "#58636d",
      "opacity": 0.6,
      "width": 0.5
    },
    "move": {
      "enable": true,
      "speed": 2,
      "direction": "left",
      "random": true,
      "straight": true,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": false,
        "mode": "grab"
      },
      "onclick": {
        "enable": true,
        "mode": "repulse"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 200,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
          }}
        />
        {/* <Navigation /> */}
        <Landing />
        <About />
        <Projects />
        <Contact />
      </div>
    );
  }
}

export default App;
