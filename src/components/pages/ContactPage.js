import React, { Component } from 'react';
import Particles from 'react-particles-js';
import { Card } from 'semantic-ui-react';

export default class ContactPage extends Component {
  componentWillMount = () => {
    window.scrollTo(0, 0);
  };

  render() {
    return (
      <div
        style={{
          paddingTop: 60,
          background: 'rgba(255, 232, 156, 0.29)',
          width: '100vw',
          height: '100vh'
        }}
      >
        <Card style={{ padding: '16px', opacity: 0.9, margin: '0 auto' }}>
          <h3>Kontakt</h3>
          <div style={{ height: 0, width: '50%', border: '2px solid #c60b1e' }} />
          <h4>Email: norberto@esmia.se</h4>
          <h4>Telefon: 0707223191</h4>
          <h4>Adress: Gustafsvägen 1, Solna</h4>
          <h4>Öppettider: 08.00-17.00</h4>
        </Card>
        <Particles />
      </div>
    );
  }
}
