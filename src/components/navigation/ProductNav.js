import React, { Component } from 'react';
import { Grid, Menu, Segment, Card } from 'semantic-ui-react';
import FlipMove from 'react-flip-move';
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
              background: `${activeItem === 'skinka' ? '#e5e5e5' : 'white'}`
            }}
          />
          <Menu.Item
            name="chorizo"
            onClick={this.handleItemClick}
            style={{
              background: `${activeItem === 'chorizo' ? '#e5e5e5' : 'white'}`
            }}
          />
          <Menu.Item
            name="kolonial"
            onClick={this.handleItemClick}
            style={{
              background: `${activeItem === 'kolonial' ? '#e5e5e5' : 'white'}`
            }}
          />
          <Menu.Item
            name="ostar"
            onClick={this.handleItemClick}
            style={{
              background: `${activeItem === 'ostar' ? '#e5e5e5' : 'white'}`
            }}
          />
          <Menu.Item
            name="paella"
            onClick={this.handleItemClick}
            style={{
              background: `${activeItem === 'paella' ? '#e5e5e5' : 'white'}`
            }}
          />
        </Menu>

        <div
          className="grid product-list"
          style={{
            background: '#e5e5e5aa',
            minHeight: '50vw'
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
