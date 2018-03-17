import React from 'react';
import Particles from 'react-particles-js';

const particlesOptions = {
  particles: {
    number: {
      value: 130
    },
    line_linked: {
      number: {
        value: 30,
        density: {
          enable: true,
          value_area: 800
        }
      }
    },
    size: {
      value: 3
    },
    move: {
      speed: 2
    }
  },
  interactivity: {
    events: {
      onhover: {
        enable: true,
        mode: 'repulse'
      },
      onclick: {
        enable: true,
        mode: 'grab'
      }
    }
  }
};

export default () => (
  <Particles
    params={particlesOptions}
    style={{ position: 'absolute', top: 0, minHeight: '100vh' }}
  />
);
