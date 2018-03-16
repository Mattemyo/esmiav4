import React from 'react';
import { Sidebar, Menu } from 'semantic-ui-react';
import { withRouter } from 'react-router';
import { NavLink } from 'react-router-dom';

const MobileSideNav = ({ sidebarOpened, location }) => (
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
);

export default withRouter(MobileSideNav);
