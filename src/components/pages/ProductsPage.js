import React, { Component } from 'react';
import MainHeading from '../headings/MainHeading';
import Footer from '../Footer';
import PageBackground from '../backgrounds/PageBackground';
import ProductNav from '../navigation/ProductNav';
import buffe from '../../images/buffe.jpg';
import Segment from 'semantic-ui-react/dist/commonjs/elements/Segment/Segment';

class ProductsPage extends Component {
  componentWillMount = () => {
    window.scrollTo(0, 0);
  };

  render() {
    return (
      <div className="page">
        <PageBackground image={buffe} />
        <MainHeading
          bigHeader={'Våra produkter'}
          smallHeader={'Charkuterier, ostar och kolonial'}
          buttonText={''}
          image={buffe}
        />
        <Segment
          style={{
            opacity: 0.9,
            background: 'white',
          }}
          vertical
        >
          <ProductNav />
        </Segment>
        <Footer />
      </div>
    );
  }
}

export default ProductsPage;
