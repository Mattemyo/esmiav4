import React, { Component } from 'react';
import { Card, Icon, Modal, Image, Header } from 'semantic-ui-react';

const extra = (
  <a>
    <Icon name="user" />
    16 Friends
  </a>
);

const mobile = window.innerWidth < 600;

const modalStyle = {
  top: 300,
  width: mobile ? '80%' : '50%',
  position: 'absolute',
  opacity: 0
};

class ProductCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalDidMount: false,
      style: {
        marginTop: mobile ? '30px' : '300px',
        width: mobile ? '80%' : '50%',
        position: 'absolute',
        marginLeft: mobile ? '7%' : '25%',
        opacity: 0
      }
    };
  }

  onModalMount = () => {
    this.setState({
      style: {
        ...this.state.style,
        opacity: 1,
        transition: 'all 0.3s ease-out'
      }
    });
  };

  get cardStyle() {
    // hide elements
    if (this.props.activeItem !== this.props.type) {
      return {
        opacity: 0.1,
        WebkitTransform: 'scaleX(0)',
        MsTransform: 'scaleX(0)',
        transform: 'scaleX(0)',
        position: 'absolute',
        WebkitTransition: 'all 0.2s',
        OTransition: 'all 0.2s',
        transition: 'all 0.2s'
      };
    }

    // display elements
    return {
      opacity: 0.95,
      OTransition: `all ${0.2}s ${0.2 + 0.03 * this.props.idx}s`,
      WebkitTransition: `all ${0.2}s ${0.2 + 0.03 * this.props.idx}s`,
      transition: `all ${0.2}s ${0.2 + 0.03 * this.props.idx}s`
    };
  }

  render() {
    const {
      cardStyle,
      onModalMount,
      state: { style },
      props: { image, name, description, price, idx, activeItem }
    } = this;
    // get short desc
    const descriptionPreview = `${description.substr(
      0,
      `${description.substr(0, 90).lastIndexOf(' ')}`
    )}...`;

    return (
      <Modal
        closeIcon
        color="black"
        style={style}
        onMount={onModalMount}
        trigger={
          <Card
            image={image}
            header={name}
            description={descriptionPreview}
            extra={price}
            size="small"
            style={{
              margin: mobile ? '0px auto' : '',
              boxShadow: '2px 2px 8px',
              cursor: 'pointer',
              ...cardStyle
            }}
            color="black"
          />
        }
      >
        {/* <Modal.Header>{name}</Modal.Header> */}
        <Modal.Content image>
          <Image
            style={{ borderRadius: '3px', boxShadow: '3px 3px 8px' }}
            wrapped
            size="medium"
            src={image}
          />
          <Modal.Description>
            <Header>{name}</Header>
            <p>{description}</p>
            <p>Pris: {price}</p>
          </Modal.Description>
        </Modal.Content>
      </Modal>
    );
  }
}
export default ProductCard;
