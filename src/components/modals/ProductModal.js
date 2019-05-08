/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';
import './ProductModal.css';

const ProductModal = ({ isVisible, content, onToggleModal, scrollPosition }) => (
  <React.Fragment>
    <div
      style={{
        top: scrollPosition - window.innerHeight * 0.9,
      }}
      onClick={onToggleModal}
      className={`cover-all ${isVisible ? '' : 'invisible'}`}
    />
    <div
      style={{
        top: scrollPosition - window.innerHeight * 0.5,
        borderRadius: 3
      }}
      className={`product-modal ${isVisible ? '' : 'hidden'}`}
    >
      <img
        style={{ borderRadius: 3, boxShadow: '3px 3px 8px' }}
        src={content.image}
        alt={content.name}
      />
      <div>
        <h1>{content.name}</h1>
        <p>{content.description}</p>
        <p>Pris: {content.price}</p>
      </div>
    </div>
  </React.Fragment>
);
export default ProductModal;
