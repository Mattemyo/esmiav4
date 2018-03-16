import React from 'react';
import { Container, Header, Button, Icon, Segment, Image } from 'semantic-ui-react';
import { withRouter } from 'react-router';

/* Heads up! MainHeading uses inline styling, however it's not the best practice. Use CSS or styled components for
 * such things.
 */

const MainHeading = ({ mobile, bigHeader, smallHeader, buttonText }) => (
  <Segment
    textAlign="center"
    style={{
      minHeight: mobile ? 350 : 700,
      padding: '1em 0em',
      background: 'rgba(0, 0, 0, 0.6)'
    }}
    vertical
  >
    <Container text>
      <Header
        as="h1"
        content={bigHeader}
        inverted
        style={{
          fontSize: mobile ? '2em' : '4em',
          fontWeight: 'normal',
          marginBottom: 0,
          marginTop: mobile ? '1.5em' : '3em'
        }}
      />
      <Header
        as="h2"
        content={smallHeader}
        inverted
        style={{
          fontSize: mobile ? '1.5em' : '1.7em',
          fontWeight: 'normal',
          marginTop: mobile ? '0.5em' : '1.5em'
        }}
      />
      {Boolean(buttonText) && (
        <Button primary size="huge">
          {buttonText}
          <Icon name="right arrow" />
        </Button>
      )}
    </Container>
  </Segment>
);

export default withRouter(MainHeading);
