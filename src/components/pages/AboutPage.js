import React, { Component } from 'react';
import Particles from 'react-particles-js';
import { Card } from 'semantic-ui-react';
import ParticlesBackground from '../backgrounds/ParticlesBackground';

export default class AboutPage extends Component {
  componentWillMount = () => {
    window.scrollTo(0, 0);
  };
  render() {
    return (
      <div>
        <Card style={{ margin: '80px auto', padding: '16px' }}>
          <h3>Om</h3>
          <h2>Sidan fortfarande under uppbyggnad</h2>
        </Card>
        <Particles />
      </div>
    );
  }
}
