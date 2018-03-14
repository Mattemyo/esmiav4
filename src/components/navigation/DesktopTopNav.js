import React from 'react';
import { withRouter } from 'react-router';
import { Visibility, Segment, Menu, Container, Button } from 'semantic-ui-react';
import MainHeading from '../headings/MainHeading';

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
          <Menu.Item as="a" active={location.pathname === '/home'}>
            Home
          </Menu.Item>
          <Menu.Item as="a">Work</Menu.Item>
          <Menu.Item as="a">Company</Menu.Item>
          <Menu.Item as="a">Careers</Menu.Item>
        </Container>
      </Menu>
      <MainHeading />
    </Segment>
  </Visibility>
);

export default withRouter(DesktopTopNav);
