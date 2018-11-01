import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { Responsive, Sidebar, Segment, Menu, Icon, Container } from 'semantic-ui-react';
import MainHeading from '../headings/MainHeading';
import MobileTopNav from '../navigation/MobileTopNav';

const MobileContainer = ({ children }) => (
  <Responsive {...Responsive.onlyMobile}>
    <MobileTopNav />
    {children}
  </Responsive>
);

export default MobileContainer;
