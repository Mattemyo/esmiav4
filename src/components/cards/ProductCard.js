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
    };
  }


  get cardStyle() {
    // hide elements
    if (this.props.activeItem !== this.props.type) {
      return {
        opacity: 0.1,
        transform: 'scaleX(0)',
        position: 'absolute',
        transition: `transform ${0.2}s, position 0.2s 0.2s`
      };
    }

    // display elements
    return {
      opacity: 1,
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
        key={name + description}
        style={{
          opacity: 0,
          ...cardStyle
        }}
      />
    );
  }
}
export default ProductCard;
