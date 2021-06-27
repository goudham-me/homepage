import { Component } from '@angular/core';
import { Container, ISourceOptions, Main } from "tsparticles";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  id = "tsparticles";

  /* or the classic JavaScript object */
  particlesOptions: ISourceOptions = {
    backgroundMode: {
      enable: true,
    },
    background: {
      color: {
        value: "#000000"
      }
    },
    particles: {
      number: {
        value: 1000,
        density: {
          enable: true,
          value_area: 900
        }
      },
      color: {
        value: "#fdfdfd"

      },
      shape: {
        type: "circle",
        stroke: {
          width: 0,
          color: "#000000"
        },
      },
      opacity: {
        value: 0.4,
        random: true,
        anim: {
          enable: true,
          speed: 1.3,
          opacity_min: 0.1,
          sync: false
        }
      },
      size: {
        value: 2,
        random: true,
        anim: {
          enable: true,
          speed: 1.3,
          size_min: 0.1,
          sync: true
        }
      },
      line_linked: {
        enable: false
      },
      move: {
        enable: true,
        speed: 0.05,
        direction: "none",
        random: true,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: {
          enable: false,
          rotateX: 1200,
          rotateY: 1200
        }
      }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: true,
          mode: "repulse"
        },
        onclick: {
          enable: false
        },
        resize: true
      },
      modes: {
        repulse: {
          distance: 40,
          speed: 0.2
        }
      }
    },
    retina_detect: true
  };

  particlesLoaded(container: Container): void {
    console.log(container);
  }

  particlesInit(main: Main): void {
    console.log(main);

    // Starting from 1.19.0 you can add custom presets or shape here, using the current tsParticles instance (main)
  }
}
