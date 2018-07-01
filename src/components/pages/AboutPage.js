import React, { Component } from 'react';
import Footer from '../Footer';

export default class AboutPage extends Component {
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
        <div style={{ paddingTop: 30, marginLeft: '20%' }}>
          <h1>Om</h1>
          <div style={{ height: 0, width: '50%', border: '2px solid #c60b1e' }} />
        </div>
        <p style={{ marginLeft: '20%', paddingTop: 30, height: '50vh' }}>
          Esmia HB säljer spanska produkter
        </p>
        <Footer />
      </div>
    );
  }
}
