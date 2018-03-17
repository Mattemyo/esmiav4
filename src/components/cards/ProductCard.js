import React, { Component } from 'react';
import { Card, Icon } from 'semantic-ui-react';

const extra = (
  <a>
    <Icon name="user" />
    16 Friends
  </a>
);

class ProductCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      style: { transform: `translateX(${window.innerWidth / 2}px)` }
    };
  }

  render() {
    const { state: { style }, props: { image, name, description, price, idx, isHidden } } = this;

    return (
      <Card
        image={image}
        header={name}
        meta="Friend"
        description={description}
        extra={price}
        size="small"
        key={name + description}
        style={{
          opacity: isHidden ? 0 : 1,
          transform: `translateX(${50}px)`,
          transition: 'all 0.2s'
        }}
      />
    );
  }
}
export default ProductCard;
