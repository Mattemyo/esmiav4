import React from 'react';
// import { Segment, Container, Grid, Header, List } from 'semantic-ui-react';

const Footer = () => (
  <div className="ui inverted vertical footer segment" style={{ background: '#c60b1e' }}>
    <div className="ui center aligned container">
      <h4 className="ui inverted header">&copy; Copyright 2021 | All rights reserved | Esmia HB</h4>
      <a
        style={{ color: '#fff' }}
        href="https://www.facebook.com/MeAlegro-DeBerto-198486140220205/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fa fa-facebook fa-3x" />
      </a>
      {/* <a href="https://twitter.com/">
        <i className="twitter square icon big" />
      </a>
      <a href="https://www.linkedin.com/company/c">
        <i className="linkedin square icon big" />
      </a> */}
    </div>
  </div>
);

export default Footer;
