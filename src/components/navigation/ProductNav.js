import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import ProductCard from '../cards/ProductCard';
import ProductModal from '../modals/ProductModal';
import products from '../../data/db';
import './ProductNav.css';

export default class ProductNav extends Component {
  state = {
    activeItem: 'skinka',
    isModalVisible: false,
    modalContent: {},
    scrollPosition: 0
  };

  componentDidMount = () => {
    window.addEventListener('scroll', this.setScroll);
  };

  onItemClick = (e, { name }) => {
    this.setState({ activeItem: name });
  };

  onToggleModal = (item = {}) => {
    this.setState(({ isModalVisible }) => {
      if (isModalVisible) {
        window.removeEventListener('scroll', this.noScroll);
      } else {
        window.addEventListener('scroll', this.noScroll);
      }
      return {
        isModalVisible: !isModalVisible,
        modalContent: item
      };
    });
  };

  setScroll = () => {
    const { scrollPosition, /* isModalVisible */ } = this.state;
    const { scrollY } = window;
    if (Math.abs(scrollPosition - scrollY) > 30) {
      this.setState({ scrollPosition: scrollY });
    }
  };

  noScroll = () => {
    const {scrollPosition} = this.state
    window.scrollTo(0, scrollPosition);
  };

  render() {
    const { activeItem, isModalVisible, modalContent, scrollPosition } = this.state;

    return (
      <React.Fragment>
        <ProductModal
          onToggleModal={this.onToggleModal}
          isVisible={isModalVisible}
          content={modalContent}
          scrollPosition={scrollPosition}
        />
        <div className="grid nav">
          <Menu
            vertical
            tabular
            style={{
              opacity: 0.86,
              fontSize: '1.2em',
              borderRadius: '2px',
              textAlign: 'left'
            }}
          >
            <Menu.Item
              name="skinka"
              onClick={this.onItemClick}
              style={{
                background: `${activeItem === 'skinka' ? '#c60b1e' : 'white'}`
              }}
            />
            <Menu.Item
              name="chorizo"
              onClick={this.onItemClick}
              style={{
                background: `${activeItem === 'chorizo' ? '#c60b1e' : 'white'}`
              }}
            />
            {/* <Menu.Item
              name="kolonial"
              onClick={this.onItemClick}
              style={{
                background: `${activeItem === 'kolonial' ? '#c60b1e' : 'white'}`
              }}
            /> */}
            <Menu.Item
              name="ostar"
              onClick={this.onItemClick}
              style={{
                background: `${activeItem === 'ostar' ? '#c60b1e' : 'white'}`
              }}
            />
            <Menu.Item
              name="catering"
              onClick={this.onItemClick}
              style={{
                background: `${activeItem === 'catering' ? '#c60b1e' : 'white'}`
              }}
            />
          </Menu>

          <div
            className="grid product-list"
            style={{
              background: '#c60b1ee0',
              minHeight: '50vw',
              minWidth: '50vw'
            }}
          >
            {products.reduce(
              (acc, product) =>
                product.type === activeItem
                  ? acc.concat(
                      <ProductCard
                        image={product.image}
                        name={product.name}
                        price={product.price}
                        type={product.type}
                        description={product.description}
                        key={product.name + product.price + product.description}
                        activeItem={activeItem}
                        onClick={() => this.onToggleModal(product)}
                      />
                    )
                  : acc,
              []
            )}
          </div>
        </div>
      </React.Fragment>
    );
  }
}
