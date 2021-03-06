import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Header, Button, Icon, Segment } from 'semantic-ui-react';
import { withRouter } from 'react-router';

/* Heads up! MainHeading uses inline styling, however it's not the best practice. Use CSS or styled components for
 * such things.
 */

const MainHeading = ({ bigHeader, smallHeader, buttonText, link }) => {
  const mobile = window.innerWidth < 768;

  return (
    <Segment
      textAlign="center"
      style={{
        minHeight: mobile ? 350 : 700,
        paddingTop: `${mobile ? 6 : 2}em`,
        marginBottom: mobile ? 0 : -90,
        background: '#1B1C1Db0'
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
            textShadow: '2px 2px black',
            marginBottom: 0,
            marginTop: mobile ? '1.5em' : '3em'
          }}
        />
        <Header
          as="h2"
          content={smallHeader}
          inverted
          style={{
            textShadow: '2px 2px black',
            fontSize: mobile ? '1.5em' : '1.7em',
            fontWeight: 'normal',
            marginTop: mobile ? '0.5em' : '1.5em'
          }}
        />
        {Boolean(buttonText) && (
          <Button
            as={Link}
            to={link}
            style={{
              color: '#c60b1e',
              background: '#ffc400'
            }}
            size="huge"
          >
            {buttonText}
            <Icon name="right arrow" />
          </Button>
        )}
      </Container>
    </Segment>
  );
};
export default withRouter(MainHeading);
