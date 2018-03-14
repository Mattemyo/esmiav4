import React, { Component } from 'react';
import { Responsive, Sidebar, Segment, Menu, Icon, Container } from 'semantic-ui-react';
import MobileSideNav from '../navigation/MobileSideNav';
import MainHeading from '../headings/MainHeading';

class MobileContainer extends Component {
  state = {};

  handlePusherClick = () => {
    const { sidebarOpened } = this.state;

    if (sidebarOpened) this.setState({ sidebarOpened: false });
  };

  handleToggle = () => this.setState({ sidebarOpened: !this.state.sidebarOpened });

  render() {
    const { children } = this.props;
    const { sidebarOpened } = this.state;

    return (
      <Responsive {...Responsive.onlyMobile} >
        <Sidebar.Pushable>
          <MobileSideNav sidebarOpened={sidebarOpened} />
          <Sidebar.Pusher
            dimmed={sidebarOpened}
            onClick={this.handlePusherClick}
            style={{ minHeight: '100em' }}
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
            {/* CONTENT OF SITE */}
            {children}
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </Responsive>
    );
  }
}

export default MobileContainer;
