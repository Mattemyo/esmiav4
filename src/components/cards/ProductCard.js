/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { PureComponent } from 'react';
import { Card, Icon, Modal, Image, Header } from 'semantic-ui-react';

import './ProductCard.css';

const mobile = window.innerWidth < 600;

class ProductCard extends PureComponent {
  render() {
    const { image, name, description, price, idx, activeItem, onClick } = this.props;
    const lastSpace = description.substr(0, 90).lastIndexOf(' ');
    const isDescriptionLong = description.length > 90;
    const descriptionPreview = isDescriptionLong
      ? `${description.substr(0, lastSpace)}...`
      : `${description}.`;

    return (
      <div
        onClick={onClick}
        style={{
          margin: mobile ? '0px auto' : '',
          boxShadow: '2px 2px 8px',
          cursor: 'pointer',
          background: '#fff',
          borderRadius: 3,
        }}
        className="product-card"
      >
        {name && <h1>{name}</h1>}
        <img src={image} alt={name} />
        {description && (
          <div className="description-wrapper">
            <p>{descriptionPreview}</p>
            <p>{price}</p>
          </div>
        )}
      </div>
    );
  }
}

export default ProductCard;
