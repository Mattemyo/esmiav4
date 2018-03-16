import React from 'react';
import { Segment } from 'semantic-ui-react';

export default ({ image }) => (
  <Segment
    style={{
      minWidth: '100vw',
      minHeight: '100vh',
      position: 'absolute',
      top: 0,
      zIndex: -2,
      backgroundImage: `url(${image})`,
      backgroundPosition: '50% 80%',
      backgroundSize: 'cover',
      backgroundAttachment: 'fixed',
      opacity: 0.9
    }}
  />
);
