import React, { Component } from 'react';
import { Grid, Menu, Segment, Card } from 'semantic-ui-react';
import FlipMove from 'react-flip-move';
import ProductCard from '../cards/ProductCard';
import products from '../../utils/db';
import Sticky from 'semantic-ui-react/dist/commonjs/modules/Sticky/Sticky';

export default class ProductNav extends Component {
  state = {
    activeItem: 'skinka'
  };

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name });
  };

  render() {
    const { activeItem } = this.state;
    const mobile = window.innerWidth < 786;

    return (
      <Grid style={{ minHeight: '90vh' }}>
        <Grid.Column width={mobile ? 6 : 4}>
          <Menu
            vertical
            tabular
            style={{
              opacity: 0.86,
              fontSize: '1.4em'
            }}
          >
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

        <Grid.Column stretched width={mobile ? 10 : 12}>
          <Segment style={{ background: '#8c91ab6d' }}>
            <Card.Group itemsPerRow={mobile ? 1 : 3}>
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
            </Card.Group>
          </Segment>
        </Grid.Column>
      </Grid>
    );
  }
}
