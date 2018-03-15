import React from 'react';
import { Segment, Container, Grid, Header, List } from 'semantic-ui-react';

const Footer = () => (
  <div>
    <Segment inverted vertical style={{ padding: '5em 0em' }}>
      <Container>
        <Grid divided inverted stackable>
          <Grid.Row>
            <Grid.Column width={3}>
              <Header inverted as="h4" content="Om" />
              <List link inverted>
                <List.Item as="a">Karta</List.Item>
                <List.Item as="a">Kontakta oss</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={3}>
              <Header inverted as="h4" content="Services" />
              <List link inverted>
                <List.Item as="a">Lorem</List.Item>
                <List.Item as="a">Lorem</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={7}>
              <Header as="h4" inverted>
                Footer Header
              </Header>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo exercitationem facere
                rem fuga ipsum, veniam minus nostrum nisi molestiae error vitae aliquid dicta
                tempora dolor quod quaerat quia nihil at!
              </p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
  </div>
);

export default Footer;
