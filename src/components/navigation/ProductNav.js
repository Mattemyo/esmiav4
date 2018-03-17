import React, { Component } from 'react';
import { Grid, Menu, Segment, Card } from 'semantic-ui-react';
import FlipMove from 'react-flip-move';
import ProductCard from '../cards/ProductCard';
import products from '../../utils/db';

export default class ProductNav extends Component {
  state = {
    activeItem: 'skinka',
    activeList: products.filter((product) => product.type === this.activeItem)
  };

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name });
  };
  render() {
    const { activeItem } = this.state;
    const activeList = products.filter((product) => product.type === activeItem);

    return (
      <Grid style={{ minHeight: '90vh' }}>
        <Grid.Column width={4}>
          <Menu fluid vertical tabular>
            <Menu.Item
              name="skinka"
              active={activeItem === 'skinka'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name="chorizo"
              active={activeItem === 'chorizo'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name="kolonial"
              active={activeItem === 'kolonial'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name="ostar"
              active={activeItem === 'ostar'}
              onClick={this.handleItemClick}
            />
          </Menu>
        </Grid.Column>

        <Grid.Column stretched width={12}>
          <Segment>
            <Card.Group>
              {activeList.map((product, idx) => (
                <ProductCard
                  image={product.image}
                  name={product.name}
                  price={product.price}
                  description={product.description}
                  key={product.name + product.description}
                  idx={idx}
                />
              ))}
            </Card.Group>
          </Segment>
        </Grid.Column>
      </Grid>
    );
  }
}
