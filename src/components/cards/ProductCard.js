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
      style: { opacity: 0, transform: 'translateX(-100px)' }
    };
  }

  componentDidMount = () => {
    const initialDelay = 100;
    let opacity = 0;
    let offsetX = -100;
    setInterval(() => {
      opacity += 0.2;
      offsetX += 2;
      this.setState({ style: { opacity, transform: `translateX(${offsetX}px)` } });
    }, 200);

    // setTimeout(() => {
    //   this.setState({ style: { opacity: 1, transform: 'translateX(50px)' } });
    // }, initialDelay + 100 * this.props.idx);

    // setTimeout(() => {
    //   this.setState({ style: { ...this.state.style, transform: 'translateX(0px)' } });
    // }, initialDelay * 2 + 100 * this.props.idx);
  };

  render() {
    const { state: { style }, props: { image, name, description, price, idx } } = this;

    return (
      <Card
        image={image}
        header={name}
        meta="Friend"
        description={description}
        extra={price}
        size="small"
        key={name + description}
        style={style}
      />
    );
  }
}
export default ProductCard;
