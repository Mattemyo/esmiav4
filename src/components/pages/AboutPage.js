import React from 'react';
import { Card } from 'semantic-ui-react';
import ParticlesBackground from '../backgrounds/ParticlesBackground';

export default () => (
  <div>
    <Card
      style={{ margin: '30px auto' }}
      image="/assets/images/avatar/large/elliot.jpg"
      header="Om"
      meta=":Öppettider: 08:00-17:00"
      description="Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat."
      extra={'hey'}
    />
    <ParticlesBackground  />
  </div>
);
