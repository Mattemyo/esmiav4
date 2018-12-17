import React, { PureComponent } from 'react';
import { Card, Icon, Modal, Image, Header } from 'semantic-ui-react';

const mobile = window.innerWidth < 600;

class ProductCard extends PureComponent {
  render() {
    const { props: { image, name, description, price, idx, activeItem, onClick } } = this;
    const lastSpace = description.substr(0, 90).lastIndexOf(' ');
    const descriptionPreview = `${description.substr(0, lastSpace)}...`;

    return (
      <div
        onClick={onClick}
        style={{
          margin: mobile ? '0px auto' : '',
          boxShadow: '2px 2px 8px',
          cursor: 'pointer'
        }}
      >
        <h1>{name}</h1>
        <img src={image} />
        <p>{descriptionPreview}</p>
        <p>{price}</p>
      </div>
    );
  }
}
export default ProductCard;
