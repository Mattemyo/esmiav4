import React from 'react';
import { AnimatedSwitch, spring } from 'react-router-transition';

// we need to map the `scaleX` prop we define below
// to the transform style property
const mapStyles = ({ scaleX, opacity, delay }) => ({
  opacity,
  transform: `scaleX(${scaleX})`,
});

// wrap the `spring` helper to use a bouncy config
const bounce = (val) =>
  spring(val, {
    stiffness: 650,
    damping: 90
  });
// child matches will...
const bounceTransition = {
  // start in a transparent, upscaleXd state
  atEnter: {
    opacity: 0,
    scaleX: 0,
    delay: 0.2
  },
  // leave in a transparent, downscaleXd state
  atLeave: {
    opacity: 0,
    scaleX: 0,
    delay: 0
    
  },
  // and rest at an opaque, normally-scaleXd state
  atActive: {
    opacity: bounce(1),
    scaleX: bounce(1),
    delay: 0
    
  }
};

const CloseAndOpen = ({ children }) => (
  <AnimatedSwitch
    atEnter={bounceTransition.atEnter}
    atLeave={bounceTransition.atLeave}
    atActive={bounceTransition.atActive}
    mapStyles={mapStyles}
    className="route-wrapper"
  >
    {children}
  </AnimatedSwitch>
);

export default CloseAndOpen;
