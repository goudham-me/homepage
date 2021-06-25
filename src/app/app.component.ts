import {Component} from '@angular/core';
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
      enable: true,
      zIndex: 0
    },
    background: {
          color: {
            value: "#011024"
          }
        },
    particles: {
      number: {
        value: 1000,
        density: {
          enable: true,
          value_area: 800
        }
      },
      color: {
        value: "#00fff3"
      },
      shape: {
        type: "circle",
        stroke: {
          width: 0,
          color: "#000000"
        },
      },
      opacity: {
        value: 0.6,
        random: true,
        anim: {
          enable: true,
          speed: 1.2,
          opacity_min: 0.1,
          sync: false
        }
      },
      size: {
        value: 3,
        random: true,
        anim: {
          enable: true,
          speed: 2,
          size_min: 0.1,
          sync: false
        }
      },
      line_linked: {
        enable: false
      },
      move: {
        enable: true,
        speed: 1,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: {
          enable: false,
          rotateX: 600,
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
  //   backgroundMode: {
  //     enable: true
  //   },
  //   background: {
  //     color: {
  //       value: "#011024"
  //     }
  //   },
  //   fpsLimit: 60,
  //   interactivity: {
  //     detectsOn: "canvas",
  //     events: {
  //       onClick: {
  //         enable: true,
  //         mode: "push"
  //       },
  //       onHover: {
  //         enable: true,
  //         mode: "repulse"
  //       },
  //       resize: true
  //     },
  //     modes: {
  //       bubble: {
  //         distance: 400,
  //         duration: 4,
  //         opacity: 0.8,
  //         size: 40,
  //       },
  //       push: {
  //         quantity: 4
  //       },
  //       repulse: {
  //         distance: 75,
  //         duration: 20
  //       }
  //     }
  //   },
  //   particles: {
  //     color: {
  //       value: ["#f67e7d", "#843b62", "#621940"]
  //     },
  //     links: {
  //       color: "#ffb997",
  //       enable: true,
  //       distance: 150,
  //       opacity: 0.5,
  //     },
  //     size: {
  //       value: 5,
  //       random: {
  //         enable: true,
  //         minimumValue: 1
  //       },
  //       animation: {
  //         enable: true,
  //         speed: 2.5,
  //         minimumValue: 1
  //       }
  //     },
  //     opacity: {
  //       value: 0.8,
  //       random: {
  //         enable: true,
  //         minimumValue: 0.4
  //       }
  //     },
  //     collisions: {
  //       enable: false,
  //     },
  //     move: {
  //       // direction: "none",
  //       enable: true,
  //       // outMode: "bounce",
  //       // random: false,
  //       // straight: false,
  //       speed: 6,
  //     },
  //     // number: {
  //     //   density: {
  //     //     enable: true,
  //     //     value_area: 1200,
  //     //   },
  //     //   value: 200,
  //     //   max: 500
  //     // },
  //     // opacity: {
  //     //   value: 0.5,
  //     // },
  //     shape: {
  //       type: "circle"
  //     },
  //     // size: {
  //     //   random: true,
  //     //   value: 4
  //     // }
  //   },
  //   detectRetina: true
  // };

particlesLoaded(container
:
Container
):
void {
  console.log(container);
}

particlesInit(main
:
Main
):
void {
  console.log(main);

  // Starting from 1.19.0 you can add custom presets or shape here, using the current tsParticles instance (main)
}
}
