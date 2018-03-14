import React, { Component } from 'react';
import { Responsive, Visibility, Segment } from 'semantic-ui-react';
import DesktopTopNav from '../navigation/DesktopTopNav';
import MainHeading from '../headings/MainHeading';

class DesktopContainer extends Component {
  state = {};

  hideFixedMenu = () => this.setState({ fixed: false });
  showFixedMenu = () => this.setState({ fixed: true });

  render() {
    const { hideFixedMenu, showFixedMenu, props: { children }, state: { fixed } } = this;

    return (
      <Responsive {...Responsive.onlyComputer}>
        <Visibility
          once={false}
          onBottomPassed={showFixedMenu}
          onBottomPassedReverse={hideFixedMenu}
        />
        <Segment
          inverted
          textAlign="center"
          style={{ minHeight: 70, padding: '1em 0em' }}
          vertical
        >
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
