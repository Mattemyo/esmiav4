import React from 'react';
import { withRouter } from 'react-router';
import { Visibility, Segment, Menu, Container, Button } from 'semantic-ui-react';
import MainHeading from '../headings/MainHeading';
import { NavLink } from 'react-router-dom';

const DesktopTopNav = ({ showFixedMenu, hideFixedMenu, fixed, location }) => (
  <Menu
    fixed={fixed ? 'top' : null}
    inverted={!fixed}
    pointing={!fixed}
    secondary={!fixed}
    size="large"
  >
    <Container>
      <Menu.Item active={location.pathname === '/home'}>
        <NavLink to="/">Hem</NavLink>
      </Menu.Item>
      <Menu.Item active={location.pathname === '/products'}>
        <NavLink to="/products">Produkter</NavLink>
      </Menu.Item>
      <Menu.Item active={location.pathname === '/about'}>
        <NavLink to="/about">Om</NavLink>
      </Menu.Item>
      <Menu.Item active={location.pathname === '/contact'}>
        <NavLink to="/contact">Kontakt</NavLink>
      </Menu.Item>
    </Container>
  </Menu>
);

export default withRouter(DesktopTopNav);
