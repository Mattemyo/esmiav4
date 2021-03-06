import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { Segment, Menu, Icon, Container } from 'semantic-ui-react';

class MobileTopNav extends Component {
  state = {
    menuOpened: false
  };

  handleToggle = () => this.setState({ menuOpened: !this.state.menuOpened });

  render() {
    const {
      state: { menuOpened },
      props: { location },
      handleToggle
    } = this;

    const menuStyle = {
      width: '100vw',
      textAlign: 'left',
      transform: `scaleY(${menuOpened ? 1 : 0})`,
      transformOrigin: 'top center',
      opacity: menuOpened ? 1 : 0
    };

    return (
      <div
        style={{
          position: 'fixed',
          zIndex: 80,
          minWidth: '100vw',
          background: '#c60b1e'
        }}
      >
        <Segment textAlign="center" style={{ padding: '0em', maxHeight: '45px' }} vertical>
          <Container>
            <Menu pointing secondary size="large">
              <Menu.Item position="right" onClick={handleToggle}>
                <Icon
                  style={{
                    color: '#ffc400'
                  }}
                  name={`${menuOpened ? 'close' : 'sidebar'}`}
                />
              </Menu.Item>
            </Menu>
          </Container>

          <Menu
            style={{
              ...menuStyle,
              position: 'relative',
              top: -20,
              transition: 'all 0.2s ease-out 0.2s',
              background: '#c60b1e'
            }}
            vertical
            width={16}
          >
            <Menu.Item
              style={{
                color: '#ffc400'
              }}
              onClick={handleToggle}
              as={NavLink}
              to="/home"
              active={location.pathname === '/home'}
            >
              Hem
            </Menu.Item>

            <Menu.Item
              style={{
                color: '#ffc400'
              }}
              onClick={handleToggle}
              as={NavLink}
              to="/products"
              active={location.pathname === '/products'}
            >
              Produkter
            </Menu.Item>

            <Menu.Item
              style={{
                color: '#ffc400'
              }}
              onClick={handleToggle}
              as={NavLink}
              to="/about"
              active={location.pathname === '/about'}
            >
              Om
            </Menu.Item>

            <Menu.Item
              style={{
                color: '#ffc400'
              }}
              onClick={handleToggle}
              as={NavLink}
              to="/contact"
              active={location.pathname === '/contact'}
            >
              Kontakt
            </Menu.Item>
          </Menu>
        </Segment>
      </div>
    );
  }
}

export default withRouter(MobileTopNav);
