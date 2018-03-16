import React, { Component } from 'react';
import { Grid, Menu, Segment } from 'semantic-ui-react';
import ProductCard from '../cards/ProductCard';
import products from '../../utils/db';

export default class ProductNav extends Component {
  state = { activeItem: 'bio' };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Grid style={{ minHeight: '90vh' }}>
        <Grid.Column width={4}>
          <Menu fluid vertical tabular>

            <Menu.Item name="skinka" active={activeItem === 'bio'} onClick={this.handleItemClick} />
            <Menu.Item
              name="chorizo"
              active={activeItem === 'pics'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name="kolonial"
              active={activeItem === 'kolonial'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name="ost"
              active={activeItem === 'ost'}
              onClick={this.handleItemClick}
            />
          </Menu>
        </Grid.Column>

        <Grid.Column stretched width={12}>
          <Segment>
            {activeItem}
            {products.filter(
              (product) =>
                product.type === activeItem && (
                  <ProductCard name={product.name} image={product.image} price={product.price} />
                )
            )}
          </Segment>
        </Grid.Column>
      </Grid>
    );
  }
}
