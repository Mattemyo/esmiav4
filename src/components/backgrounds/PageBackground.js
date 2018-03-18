import React from 'react';
import { Segment } from 'semantic-ui-react';

export default ({ image }) => {
  
  const mobile = window.innerWidth < 768;

  
  return(
  <div
    style={{
      backgroundImage: `url(${image})`,
      minHeight: mobile ? 350 : 700,
      width: '100%',
      position: 'absolute',
      margin: 0,
      top: 0,
      zIndex: -2,
      backgroundPosition: '50% 80%',
      backgroundSize: 'cover',
      backgroundAttachment: 'fixed',
      opacity: 0.9,
      position: 'absolute'
    }}
  />
);}
