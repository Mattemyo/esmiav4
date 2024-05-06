/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { PureComponent } from 'react';

import './ProductCard.css';

const mobile = window.innerWidth < 600;

class ProductCard extends PureComponent {
  render() {
    const { image, name, description, price, onClick } = this.props;
    const lastSpace = description.substr(0, 200).lastIndexOf(' ');
    const isDescriptionLong = description.length > 200;
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
          opacity: 0.95,
        }}
        className="product-card"
      >
        {name && <h2>{name}</h2>}
        {image && (name ? <img src={image} alt={name} /> : <img className="w-full" src={image} alt={name} />)}
        {description && (
          <div className="description-wrapper">
            {descriptionPreview}
            <p>{price}</p>
          </div>
        )}
      </div>
    );
  }
}

export default ProductCard;
