import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { Responsive, Sidebar, Segment, Menu, Icon, Container } from 'semantic-ui-react';
import MainHeading from '../headings/MainHeading';

class MobileContainer extends Component {
  state = {};

  handlePusherClick = () => {
    const { sidebarOpened } = this.state;

    if (sidebarOpened) this.setState({ sidebarOpened: false });
  };

  handleToggle = () => this.setState({ sidebarOpened: !this.state.sidebarOpened });

  render() {
    const { children, location } = this.props;
    const { sidebarOpened } = this.state;

    return (
      <Responsive {...Responsive.onlyMobile}>
        <Sidebar.Pushable>
          <Sidebar as={Menu} animation="uncover" inverted vertical visible={sidebarOpened}>
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
          </Sidebar>

          <Sidebar.Pusher
            dimmed={sidebarOpened}
            onClick={this.handlePusherClick}
            style={{ minHeight: '100vh', overflowY: 'scroll', minWidth: '120vw' }}
          >
            <Segment inverted textAlign="center" style={{ padding: '1em 0em' }} vertical>
              <Container>
                <Menu inverted pointing secondary size="large">
                  <Menu.Item onClick={this.handleToggle}>
                    <Icon name="sidebar" />
                  </Menu.Item>
                </Menu>
              </Container>
            </Segment>

            {children}
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </Responsive>
    );
  }
}

export default withRouter(MobileContainer);
