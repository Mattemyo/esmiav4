import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { Responsive, Sidebar, Segment, Menu, Icon, Container } from 'semantic-ui-react';


class MobileTopNav extends Component {
    state = {
    menuOpened: true
  };

  handlePusherClick = () => {
    const { menuOpened } = this.state;

    if (menuOpened) this.setState({ menuOpened: false });
  };

  handleToggle = () => this.setState({ menuOpened: !this.state.menuOpened });

  render() {

      
    const {state:{menuOpened}, props:{children, location}, handlePusherClick, handleToggle} = this;

    const menuStyle = {width: '100vw', textAlign: 'left', transform: `scaleX(${menuOpened ? 1 : 0})` }


    return (
        <div style={{position: 'fixed', zIndex: 80, minWidth: '100vw'}}>
       <Segment inverted textAlign="center" style={{ padding: '1em 0em', height: '80px' }} vertical>
              <Container>
                <Menu inverted pointing secondary size="large">
                  <Menu.Item position="right" onClick={handleToggle}>
                    <Icon name={`${menuOpened ? 'close' : "sidebar"}`} />
                    
                  </Menu.Item>
                </Menu>
              </Container>

          <Menu style={{...menuStyle, transition: 'all 0.2s ease-out 0.2s'}} inverted vertical width={16}>
            <Menu.Item onClick={handleToggle}  as={NavLink} to ="/home" active={location.pathname === '/home'}>
              Hem
            </Menu.Item>

            <Menu.Item onClick={handleToggle} as={NavLink} to ="/products" active={location.pathname === '/products'}>
              Produkter
            </Menu.Item>


            <Menu.Item onClick={handleToggle} as={NavLink} to ="/about" active={location.pathname === '/about'}>
             Om
            </Menu.Item>

            <Menu.Item onClick={handleToggle} as={NavLink} to ="/contact" active={location.pathname === '/contact'}>
              Kontakt
            </Menu.Item>
          </Menu>
            </Segment>
</div>
    )
  }
}


export default withRouter(MobileTopNav);
