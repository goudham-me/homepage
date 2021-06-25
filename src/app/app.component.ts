import { Component } from '@angular/core';
import {Container, ISourceOptions, Main} from "tsparticles";

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
      enable: true
    },
    background: {
      color: {
        value: "#011024"
      }
    },
    fpsLimit: 60,
    interactivity: {
      detectsOn: "canvas",
      events: {
        onClick: {
          enable: true,
          mode: "push"
        },
        onHover: {
          enable: true,
          mode: "repulse"
        },
        resize: true
      },
      modes: {
        bubble: {
          distance: 400,
          duration: 4,
          opacity: 0.8,
          size: 40,
        },
        push: {
          quantity: 4
        },
        repulse: {
          distance: 75,
          duration: 20
        }
      }
    },
    particles: {
      color: {
        value: ["#f67e7d", "#843b62", "#621940"]
      },
      links: {
        color: "#ffb997",
        enable: true,
        distance: 150,
        opacity: 0.5,
      },
      // move: {
      //   enable: true,
      //   speed: 4
      // },
      // links: {
      //   color: "#ffffff",
      //   distance: 150,
      //   enable: true,
      //   opacity: 0.5,
      //   width: 1
      // },
      collisions: {
        enable: false,
      },
      move: {
        direction: "none",
        enable: true,
        outMode: "bounce",
        random: false,
        straight: false,
        speed: 3,
      },
      number: {
        density: {
          enable: true,
          value_area: 1200,
        },
        value: 200,
        max: 500
      },
      opacity: {
        value: 0.5,
      },
      shape: {
        type: "circle"
      },
      size: {
        random: true,
        value: 4
      }
    },
    detectRetina: true
  };

  particlesLoaded(container: Container): void {
    console.log(container);
  }

  particlesInit(main: Main): void {
    console.log(main);

    // Starting from 1.19.0 you can add custom presets or shape here, using the current tsParticles instance (main)
  }
}
