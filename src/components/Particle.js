// I decided to overboard; and add one of my code videos, by including it into the background. //

// I love this concept, by my Network https://github.com/soumyajit4419/Portfolio; because I am able to manipulate- even control (aninmation) the particles as I see desire!  I cannot wait to contribute this piece to image: I totally changed it; and it works great over video!  YES!!! //
import React from 'react';
import Particles from 'react-particles-js';

function Particle() {
  return (

    // THIS REALLY HELP GIVE ME INSIGHT ONTO WHAT I WAS DOING.  I'VE TRIED PARTICLES SEVERAL TIMES; BUT THIS TUTORIAL REALLY HELPED.  THANK YOU https://www.youtube.com/watch?v=qK3cgD09Qf0 //
    <Particles
      params={{
        particles: {
          number: {
            value: 2021,
            density: {
              enable: true,
              value_area: 1982,
            },
          },
          // shape: {
          //   type:
          // },
          line_linked: {
            enable: false,
            opacity: 0.03,
          },
          move: {
            direction: 'right',
            speed: 0.3,
          },
          size: {
            value: 1,
          },
          opacity: {
            anim: {
              enable: true,
              speed: 3,
              opacity_min: 0.03,
            },
          },
        },
        interactivity: {
          events: {
            onclick: {
              enable: false,
              mode: 'push',
            },
          },
          modes: {
            push: {
              particles_nb: 1,
            },
          },
        },
        retina_detect: true,
      }}
    />
  );
}

export default Particle;
