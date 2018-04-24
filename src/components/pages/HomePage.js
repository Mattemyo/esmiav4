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
import { NavLink } from 'react-router-dom';
import MainHeading from '../headings/MainHeading';
import Footer from '../Footer';
import maricoPaella2 from '../../images/maricoPaella2.jpg';
import PageBackground from '../backgrounds/PageBackground';
import GotebTapas from '../../images/GotebTapas.jpg';
/* Heads up!
 * Neither Semantic UI nor Semantic UI React offer a responsive navbar, however, it can be implemented easily.
 * It can be more complicated, but you can create really flexible markup.
 */
class Homepage extends Component {
  componentWillMount = () => {
    window.scrollTo(0, 0);
  };

  render() {
    return (
      <div className="page" style={{ zIndex: 60 }}>
        <PageBackground image={maricoPaella2} />

        <MainHeading
          bigHeader={'Välkommen till Esmia HB'}
          smallHeader={'Spansk deli i Sverige'}
          buttonText={'Se produkter'}
          link={'/products'}
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
                  Alla våra produkter har ursprung i Spanien. Vi erbjuder bland
                  annat catering, chorizo och skinka till konkurrenskraftiga
                  priser.
                </p>
                <Header as="h3" style={{ fontSize: '2em' }}>
                  Catering
                </Header>

                <p style={{ fontSize: '1.33em' }}>
                  Vill ni fira er födelsedag med medelhavsmat? Eller varför inte
                  fira studenten med catering? Vare sig ni är 10 eller 100
                  personer så fixar vi det.
                </p>
              </Grid.Column>
              {/* Spacer */}
              <Grid.Column width={2} />
              <Grid.Column width={6}>
                <div>
                  <Image
                    className="w-90 ml3"
                    bordered
                    rounded
                    src={GotebTapas}
                    alt="fin bild"
                  />
                  <div className="w-90 ml3 mt0 ui bottom attached tc w-50">
                    Tapas hos kund i Göteborg
                  </div>
                </div>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column textAlign="center">
                <Button as={NavLink} to="/about" size="huge">
                  Kontakta oss
                </Button>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
        <Segment style={{ padding: '0em', background: 'white' }} vertical>
          <Grid celled="internally" columns="equal" stackable>
            <Grid.Row textAlign="center">
              {/* <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
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
          </Grid.Column> */}
            </Grid.Row>
          </Grid>
        </Segment>
        <Segment style={{ padding: '8em 0em', background: 'white' }} vertical>
          <Container text>
            <Header as="h3" style={{ fontSize: '2em' }}>
              Från det fantastiska Medelhavet
            </Header>
            <p style={{ fontSize: '1.33em' }}>
              Vi erbjuder spansk mat i alla dess former. catering, chorizo,
              skinka, ost, you name it! Efter mer än 20 år i branchen kan vi
              garantera att produkterna håller hög kvalitet och är mycket
              smakrika.
            </p>
            <Button as={NavLink} to="/about" size="large">
              Läs mer
            </Button>
            <Divider
              as="h4"
              className="header"
              horizontal
              style={{ margin: '3em 0em', textTransform: 'uppercase' }}
            >
              <a href="#">Kontakta oss</a>
            </Divider>
            <Header as="h3" style={{ fontSize: '2em' }}>
              Har du frågor eller funderingar?
            </Header>
            <p style={{ fontSize: '1.33em' }}>Maila eller ring till:</p>
            <p>
              <a href="mailto:norberto@esmia.se">norberto@esmia.se</a>
            </p>
            <p>0707223191</p>
            {/* <Button as="a" size="large">
          Ta mig dit
        </Button> */}
          </Container>
        </Segment>
        <Footer />
      </div>
    );
  }
}

export default Homepage;
