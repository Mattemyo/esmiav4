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
    const { scrollPosition /* isModalVisible */ } = this.state;
    const { scrollY } = window;
    if (Math.abs(scrollPosition - scrollY) > 30) {
      this.setState({ scrollPosition: scrollY });
    }
  };

  noScroll = () => {
    const { scrollPosition } = this.state;
    window.scrollTo(0, scrollPosition);
  };

  render() {
    const { activeItem, isModalVisible, modalContent, scrollPosition } = this.state;

    return (
      <div style={{ padding: '0 30px' }}>
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
            <Menu.Item
              name="Tapasutrustning"
              onClick={this.onItemClick}
              style={{
                background: `${activeItem === 'Tapasutrustning' ? '#c60b1e' : 'white'}`
              }}
            />
          </Menu>

          {activeItem === 'Tapasutrustning' ? (
            <div className="tapas-equipment">
              <div style={{ display: 'flex', paddingBottom: 30 }}>
                <img
                  style={{ width: '40%', borderRadius: 3, marginRight: 30 }}
                  alt="paellautrustning"
                  src={require('../../images/tapas-equipment/equipment-paella.jpg')}
                />
                <img
                  style={{ width: '40%', borderRadius: 3 }}
                  alt="gas"
                  src={require('../../images/tapas-equipment/gas.jpg')}
                />
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <h3>REF FABRIK</h3>
                <h3 style={{ marginTop: 0 }}>Styckpris</h3>
              </div>
              <h3>Lerskålar</h3>
              <ul>
                <li>
                  <div>8A001TZ</div>
                  <div>Terracota skål 12cm/diameter 48st/kolli.</div>
                  <div>26 kr/styck</div>
                </li>
              </ul>
              <h3>Paellapannor</h3>
              <ul>
                <li>
                  <div>20210</div>
                  <div>Paella panna emalj 10cm/diam 10st/pack</div>
                  <div>40kr/styck</div>
                </li>
                <li>
                  <div>20212</div>
                  <div>Paella panna emalj 12cm/diam 10st/pack</div>
                  <div>50kr/styck</div>
                </li>
                <li>
                  <div>20216</div>
                  <div>Paella panna emalj 15cm/diam 10st/pack</div>
                  <div>55kr/styck</div>
                </li>
                <li>
                  <div>20226</div>
                  <div>Paella panna emalj 26cm/diam 5st/pack</div>
                  <div>95kr/styck </div>
                </li>
                <li>
                  <div>20255</div>
                  <div>Paella panna emalj 55cm/diam 6st/pack</div>
                  <div>450kr/st</div>
                </li>
                <li>
                  <div>20270</div>
                  <div>Paella panna emalj 70cm/diam 4st/pack</div>
                  <div>830kr/st</div>
                </li>
                <li>
                  <div>20280</div>
                  <div>Paella panna emalj 80cm/diam 2st/pack</div>
                  <div>1.125kr/st</div>
                </li>
                <li>
                  <div>20290</div>
                  <div>Paella panna emalj 90cm/diam 1st/packk</div>
                  <div>1.495kr/styck</div>
                </li>
                <li>
                  <div>20290</div>
                  <div>Paella panna emalj 90cm/diam 1st/packk</div>
                  <div>1.495kr/styck</div>
                </li>
              </ul>

              <h3>Gasolbrännare</h3>
              <ul>
                <li>
                  <div>20403</div>
                  <div>Gasolbrännare 2 ringar Mod.40-P säkerhet</div>
                  <div>2.430kr/styck</div>
                </li>
                <li>
                  <div>(Tre ben 1m höga med triangel ingår)</div>
                </li>
                <li>
                  <div>20603</div>
                  <div>Gasolbrännare 3 ringar Mod.60-P säkerhet</div>
                  <div>4.580kr/styck</div>
                </li>
              </ul>
              <p>
                Förnya din köksutrustning med emaljerade lerskålar i terrakotta och emaljerade
                paellapannor. Designade för tillagning och servering av livsmedel, absolut
                hygieniska och EU-godkända. Vi fakturerar mot restaurangen med 25% moms som
                utrustning. Fråga oss om praktiska fördelar om diskning och enkel förvaring.
              </p>
              <p>ESMIA HB</p>
              <p>
                Gustafsvägen 1 
              </p>
              <p>
                169 58 Solna
              </p>
              <p>
                Tel: 0707223191
              </p>
              <p>
                Email: <a href="mailto:norberto@esmia.se">norberto@esmia.se</a>
              </p>
              <a style={{ textDecoration: 'underline' }} href="/tapasutrustning.pdf" target="_blank">Ladda ner PDF här</a>
            </div>
          ) : ( 
            <div
              className="grid product-list"
              style={{
                background: '#c60b1ee0',
                minHeight: '80vw',
                minWidth: '80vw'
              }}
            >
              {products[activeItem].map(
                (product) =>
                        <ProductCard
                          image={product.image}
                          name={product.name}
                          price={product.price}
                          type={product.type}
                          description={product.description}
                          activeItem={activeItem}
                          onClick={() => this.onToggleModal(product)}
                        />
              )}
            </div>
          )}
        </div>
      </div>
    );
  }
}
