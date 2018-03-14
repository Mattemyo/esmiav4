import React, { Component } from 'react';
import {
  Responsive,
  Visibility,
  Segment,
  Button,
  Menu,
  Container,
  Sidebar,
  Icon
} from 'semantic-ui-react';
import MainHeading from './headings/MainHeading';

import DesktopContainer from './containers/DesktopContainer';
import MobileContainer from './containers/MobileContainer';

const ResponsiveContainer = ({ children }) => (
  <div>
    <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
  </div>
);

export default ResponsiveContainer;
