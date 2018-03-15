import React from 'react';
import MainHeading from '../headings/MainHeading';
import Footer from '../Footer';

const ProductsPage = () => (
  <div className="page">
    <MainHeading
      bigHeader={'Våra produkter'}
      smallHeader={'Lorem, lorem, lorem'}
      buttonText={''}
    />
    Products
    <Footer />
  </div>
);
export default ProductsPage;
