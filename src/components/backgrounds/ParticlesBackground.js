import React from 'react';
import Particles from 'react-particles-js';
import { on } from 'cluster';

const particlesOptions = {
  particles: {
    number: {
      value: 20
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
      value: 12
    },
    move: {
      speed: 10
    }
  },
  interactivity: {
    events: {
      onhover: {
        enable: true,
        // mode: 'repulse'
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
