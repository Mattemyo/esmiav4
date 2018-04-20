import React, { Component } from 'react';
import Particles from 'react-particles-js';
import { Card } from 'semantic-ui-react';

export default class ContactPage extends Component {
  componentWillMount = () => {
    window.scrollTo(0, 0);
  };

  render() {
    return (
      <div>
        <Card style={{ margin: '80px auto', padding: '16px' }}>
          <h3>Kontakt</h3>
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
