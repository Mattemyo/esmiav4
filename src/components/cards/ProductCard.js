import React, { Component } from 'react';
import { Card, Icon } from 'semantic-ui-react';
import FlipMove from 'react-flip-move';

const extra = (
  <a>
    <Icon name="user" />
    16 Friends
  </a>
);

class CardExampleCardProps extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { props: { image, name, description, price } } = this;

    return (
      <FlipMove duration={750} easing="ease-out">
        <Card
          image={image}
          header={name}
          meta="Friend"
          description={description}
          extra={price}
          size="small"
          key={name + description}
        />
      </FlipMove>
    );
  }
}
export default CardExampleCardProps;
