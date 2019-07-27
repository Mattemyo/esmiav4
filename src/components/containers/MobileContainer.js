import React from 'react';
import { Responsive } from 'semantic-ui-react';
import MobileTopNav from '../navigation/MobileTopNav';

const MobileContainer = ({ children }) => (
  <Responsive {...Responsive.onlyMobile}>
    <MobileTopNav />
    {children}
  </Responsive>
);

export default MobileContainer;
