import React, { Component } from 'react';
import { Responsive } from 'semantic-ui-react';
import DesktopTopNav from '../navigation/DesktopTopNav';

class DesktopContainer extends Component {
  state = {};

  hideFixedMenu = () => this.setState({ fixed: false });
  showFixedMenu = () => this.setState({ fixed: true });

  render() {
    const { hideFixedMenu, showFixedMenu, props: { children }, state: { fixed } } = this;

    return (
      <Responsive {...Responsive.onlyComputer}>
        <DesktopTopNav fixed={fixed} hideFixedMenu={hideFixedMenu} showFixedMenu={showFixedMenu} />
        {children}
      </Responsive>
    );
  }
}

export default DesktopContainer;
