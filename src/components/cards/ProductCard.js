import React, { Component } from 'react';
import { Card, Icon, Modal, Image, Header } from 'semantic-ui-react';

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
      isModalDisplayed: false
    };
  }

  get cardStyle() {
    // hide elements
    if (this.props.activeItem !== this.props.type) {
      return {
        opacity: 0.1,
        transform: 'scaleX(0)',
        position: 'absolute',
        transition: `all ${0.2}s`
      };
    }

    // display elements
    return {
      opacity: 0.76,
      transition: `all ${0.2}s ${0.2 + 0.03 * this.props.idx}s`
    };
  }

  displayModal = () => {
    this.setState({ isModalDisplayed: true });
  };

  render() {
    const {
      cardStyle,
      displayModal,
      state: { style, isModalDisplayed },
      props: { image, name, description, price, idx, activeItem }
    } = this;
    // get short desc
    const descriptionPreview = `${description.substr(
      0,
      `${description.substr(0, 90).lastIndexOf(' ')}`
    )}...`;

    return (
      <Modal
        trigger={
          <Card
            onClick={displayModal}
            image={image}
            header={name}
            description={descriptionPreview}
            extra={price}
            size="small"
            style={{
              opacity: 0,
              boxShadow: '2px 2px 8px',
              cursor: 'pointer',
              ...cardStyle
            }}
            color="blue"
          />
        }
      >
        <Modal.Header>Select a Photo</Modal.Header>
        <Modal.Content image>
          <Image wrapped size="medium" src="/assets/images/avatar/large/rachel.png" />
          <Modal.Description>
            <Header>Default Profile Image</Header>
            <p>We've found the following gravatar image associated with your e-mail address.</p>
            <p>Is it okay to use this photo?</p>
          </Modal.Description>
        </Modal.Content>
      </Modal>
    );
  }
}
export default ProductCard;
