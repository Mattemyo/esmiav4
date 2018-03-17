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
    this.state = {};
  }

  get cardStyle() {
    // hide elements
    if (this.props.activeItem !== this.props.type) {
      return {
        opacity: 0.1,
        transform: 'scaleX(0)',
        position: 'absolute',
        transition: `all ${0.2}s`,
      };
    }

    // display elements
    return {
      opacity: 0.76,
      transition: `all ${0.2}s ${0.2 + 0.03 * this.props.idx}s`
    };
  }

  render() {
    const {
      cardStyle,
      state: { style },
      props: { image, name, description, price, idx, activeItem }
    } = this;

    return (
      <Card
        image={image}
        header={name}
        meta="Friend"
        description={description}
        extra={price}
        size="small"
        style={{
          opacity: 0,
          ...cardStyle
        }}
        color="blue"
      />
    );
  }
}
export default ProductCard;
