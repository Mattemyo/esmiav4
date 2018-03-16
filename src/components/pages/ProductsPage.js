import React from 'react';
import MainHeading from '../headings/MainHeading';
import Footer from '../Footer';
import ProductNav from '../navigation/ProductNav';
import buffe from '../../images/buffe.jpg';
import Segment from 'semantic-ui-react/dist/commonjs/elements/Segment/Segment';
import Container from 'semantic-ui-react/dist/commonjs/elements/Container/Container';

const ProductsPage = () => (
  <div className="page">
    <MainHeading
      bigHeader={'Våra produkter'}
      smallHeader={'Lorem, lorem, lorem'}
      buttonText={''}
      image={buffe}
    />
    <Segment
      style={{
        padding: '8em 0em',
        background: '#d3d3d39f'
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
