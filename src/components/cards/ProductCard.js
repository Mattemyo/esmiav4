import React from 'react';
import { Card, Icon } from 'semantic-ui-react';

function importAll(r) {
  const images = {};
  r.keys().forEach((item, index) => {
    images[item.replace('./', '')] = r(item);
  });
  return images;
}

const images = importAll(require.context('../../images', false, /\.(png|jpe?g|svg)$/));

const extra = (
  <a>
    <Icon name="user" />
    16 Friends
  </a>
);

const CardExampleCardProps = ({ name, image, price }) => (
  <Card
    image={image}
    header={name}
    meta="Friend"
    description="Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat."
    extra={extra}
  />
);

export default CardExampleCardProps;
