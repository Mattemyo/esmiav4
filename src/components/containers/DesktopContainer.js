import React, { Component } from 'react';
import { Responsive, Visibility, Segment } from 'semantic-ui-react';
import DesktopTopNav from '../navigation/DesktopTopNav';
import Image from 'semantic-ui-react/dist/commonjs/elements/Image/Image';

class DesktopContainer extends Component {
  state = {};

  hideFixedMenu = () => this.setState({ fixed: false });
  showFixedMenu = () => this.setState({ fixed: true });

  render() {
    const { hideFixedMenu, showFixedMenu, props: { children }, state: { fixed } } = this;

    return (
      <Responsive minWidth={768}>
        <Visibility
          once={false}
          onBottomPassed={showFixedMenu}
          onBottomPassedReverse={hideFixedMenu}
        />
        <Segment textAlign="center" style={{ 
          background: '#ffc400',
          minHeight: 35, padding: '0.1em 0em' }} vertical>
          <DesktopTopNav
            fixed={fixed}
            hideFixedMenu={hideFixedMenu}
            showFixedMenu={showFixedMenu}
          />
        </Segment>
   
        {children}
      </Responsive>
    );
  }
}

export default DesktopContainer;
