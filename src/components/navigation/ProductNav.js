import React, { Component } from 'react';
import { Grid, Menu, Segment, Card } from 'semantic-ui-react';
import ProductCard from '../cards/ProductCard';
import products from '../../data/db';
import './ProductNav.css';

export default class ProductNav extends Component {
  state = {
    activeItem: 'skinka'
  };

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name });
  };

  render() {
    const { activeItem } = this.state;
    const mobile = window.innerWidth < 900;
    const bg = '#8c91ab6d';

    return (
      <div className="grid nav">
        <Menu
          vertical
          tabular
          style={{
            opacity: 0.86,
            fontSize: '1.2em',
            borderRadius: '2px',
            textAlign: 'left'
          }}
        >
          <Menu.Item
            name="skinka"
            onClick={this.handleItemClick}
            style={{
              background: `${activeItem === 'skinka' ? '#c60b1e' : 'white'}`
            }}
          />
          <Menu.Item
            name="chorizo"
            onClick={this.handleItemClick}
            style={{
              background: `${activeItem === 'chorizo' ? '#c60b1e' : 'white'}`
            }}
          />
          <Menu.Item
            name="kolonial"
            onClick={this.handleItemClick}
            style={{
              background: `${activeItem === 'kolonial' ? '#c60b1e' : 'white'}`
            }}
          />
          <Menu.Item
            name="ostar"
            onClick={this.handleItemClick}
            style={{
              background: `${activeItem === 'ostar' ? '#c60b1e' : 'white'}`
            }}
          />
          <Menu.Item
            name="catering"
            onClick={this.handleItemClick}
            style={{
              background: `${activeItem === 'catering' ? '#c60b1e' : 'white'}`
            }}
          />
        </Menu>

        <div
          className="grid product-list"
          style={{
            background: '#c60b1ee0',
            minHeight: '50vw',
            minWidth: '50vw'
          }}
        >
          {products.map((product, idx) => (
            <ProductCard
              image={product.image}
              name={product.name}
              price={product.price}
              type={product.type}
              description={product.description}
              key={product.name + product.price + product.description}
              idx={idx}
              activeItem={activeItem}
            />
          ))}
        </div>
      </div>
    );
  }
}
