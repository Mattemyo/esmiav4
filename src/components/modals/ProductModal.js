import React from 'react';
import './ProductModal.css';

const ProductModal = ({ isVisible, content, onToggleModal }) => (
  <React.Fragment>
    <div onClick={onToggleModal} className={`cover-all ${isVisible ? '' : 'invisible'}`} />
    <div className={`product-modal ${isVisible ? '' : 'hidden'}`}>
      <img style={{ borderRadius: '3px', boxShadow: '3px 3px 8px' }} src={content.image} />
      <div>
        <h1>{content.name}</h1>
        <p>{content.description}</p>
        <p>Pris: {content.price}</p>
      </div>
    </div>
  </React.Fragment>
);
export default ProductModal;
