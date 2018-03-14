import React from 'react';
import { withRouter } from 'react-router';
import { Visibility, Segment, Menu, Container, Button } from 'semantic-ui-react';
import MainHeading from '../headings/MainHeading';
import { NavLink } from 'react-router-dom';

const DesktopTopNav = ({ showFixedMenu, hideFixedMenu, fixed, location }) => (
  <Visibility once={false} onBottomPassed={showFixedMenu} onBottomPassedReverse={hideFixedMenu}>
    <Segment inverted textAlign="center" style={{ minHeight: 700, padding: '1em 0em' }} vertical>
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
            <NavLink to="/">Om</NavLink>
          </Menu.Item>
          <Menu.Item active={location.pathname === '/contact'}>
            <NavLink to="/">Kontakt</NavLink>
          </Menu.Item>
        </Container>
      </Menu>
      <MainHeading />
    </Segment>
  </Visibility>
);

export default withRouter(DesktopTopNav);
