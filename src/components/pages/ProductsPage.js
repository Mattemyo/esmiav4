import React from 'react';
import MainHeading from '../headings/MainHeading';
import Footer from '../Footer';
import PageBackground from '../backgrounds/PageBackground';
import ProductNav from '../navigation/ProductNav';
import buffe from '../../images/buffe.jpg';
import Segment from 'semantic-ui-react/dist/commonjs/elements/Segment/Segment';
import Container from 'semantic-ui-react/dist/commonjs/elements/Container/Container';

const ProductsPage = () => (
  <div className="page">
    <PageBackground image={buffe} />
    <MainHeading
      bigHeader={'Våra produkter'}
      smallHeader={'Lorem, lorem, lorem'}
      buttonText={''}
      image={buffe}
    />
    <Segment
      style={{
        padding: '8em 0em',
        opacity: 0.9,
        background: 'white'
      }}
      vertical
    >


      <Container>
        <ProductNav />
      </Container>
    </Segment>
    <Footer />
  </div>
);
export default ProductsPage;
