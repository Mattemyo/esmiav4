import React, { Component } from 'react';
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Visibility
} from 'semantic-ui-react';
import MainHeading from '../headings/MainHeading';
import Footer from '../Footer';
import norbertoPaellas from '../../images/norbertoPaellas.JPG';
import maricoPaella2 from '../../images/maricoPaella2.jpg';

/* Heads up!
 * Neither Semantic UI nor Semantic UI React offer a responsive navbar, however, it can be implemented easily.
 * It can be more complicated, but you can create really flexible markup.
 */

const Homepage = () => (
  <div className="page" style={{ background: 'white', zIndex: 60 }}>
    <MainHeading
      bigHeader={'Välkommen till Esmia HB'}
      smallHeader={'Vi säljer produkter'}
      buttonText={'Se produkter'}
      image={maricoPaella2}
    />
    <Segment
      style={{
        padding: '8em 0em',
        background: 'white'
      }}
      vertical
    >
      <Grid container stackable verticalAlign="middle">
        <Grid.Row>
          <Grid.Column width={8}>
            <Header as="h3" style={{ fontSize: '2em' }}>
              Vi säljer spanska delikatesser
            </Header>
            <p style={{ fontSize: '1.33em' }}>
              Produkterna är utvalda från de bästa producenterna i Spanien. Vi säljer bland annat
              lorem, lorem, lorem till konkurrenskraftiga priser.
            </p>
            <Header as="h3" style={{ fontSize: '2em' }}>
              Catering
            </Header>

            <p style={{ fontSize: '1.33em' }}>
              Vill ni fira er födelsedag med medelhavsmat? Eller varför inte fira studenten med
              Paella? Vare sig ni är 10 eller 100 personer så fixar vi det.
            </p>
          </Grid.Column>
          <Grid.Column floated="right" width={6}>
            <Image
              bordered
              rounded
              size="large"
              src="/assets/images/wireframe/white-image.png"
              alt="fin bild"
            />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column textAlign="center">
            <Button size="huge">Bacon Ipsum</Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
    <Segment style={{ padding: '0em', background: 'white' }} vertical>
      <Grid celled="internally" columns="equal" stackable>
        <Grid.Row textAlign="center">
          <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
            <Header as="h3" style={{ fontSize: '2em' }}>
              "Fint citat här"
            </Header>
            <p style={{ fontSize: '1.33em' }}>Denna webbsida är under utveckling</p>
          </Grid.Column>
          <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
            <Header as="h3" style={{ fontSize: '2em' }}>
              "Ett till citat har"
            </Header>
            <p style={{ fontSize: '1.33em' }}>
              <Image avatar src="/assets/images/avatar/large/nan.jpg" alt="fin bild" />
              Someone
            </p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
    <Segment style={{ padding: '8em 0em', background: 'white' }} vertical>
      <Container text>
        <Header as="h3" style={{ fontSize: '2em' }}>
          Det bästa urvalet från Medelhavet
        </Header>
        <p style={{ fontSize: '1.33em' }}>
          Bacon ipsum dolor amet ribeye kevin pancetta capicola strip steak venison. Picanha ribeye
          porchetta shoulder spare ribs tail chuck. Salami leberkas chicken kielbasa short ribs,
          capicola pancetta. Turducken pastrami alcatra capicola frankfurter ground round ball tip
          pork loin tail jerky landjaeger doner fatback. Burgdoggen tail strip steak, frankfurter
          pancetta ball tip fatback venison porchetta cow.
        </p>
        <Button as="a" size="large">
          Läs mer
        </Button>
        <Divider
          as="h4"
          className="header"
          horizontal
          style={{ margin: '3em 0em', textTransform: 'uppercase' }}
        >
          <a href="#">Mer info</a>
        </Divider>
        <Header as="h3" style={{ fontSize: '2em' }}>
          Gillar du mat?
        </Header>
        <p style={{ fontSize: '1.33em' }}>lorem mat mat mat mums</p>
        <Button as="a" size="large">
          Ta mig dit
        </Button>
      </Container>
    </Segment>
    <Footer />
  </div>
);

export default Homepage;