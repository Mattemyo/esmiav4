import React from 'react';
import { Tab } from 'semantic-ui-react';

const panes = [
  { menuItem: 'Skinkor', render: () => <Tab.Pane>Skinkor Content</Tab.Pane> },
  { menuItem: 'Chorizos', render: () => <Tab.Pane>Chorizos Content</Tab.Pane> },
  { menuItem: 'Ostar', render: () => <Tab.Pane>Ostar Content</Tab.Pane> },
  { menuItem: 'Kolonial', render: () => <Tab.Pane>Kolonial Content</Tab.Pane> },
  { menuItem: 'Paella', render: () => <Tab.Pane>Paella Content</Tab.Pane> },
];

const ProductNav = () => (
  <Tab menu={{pointing: true, fluid: true, vertical: true, tabular: 'right' }} panes={panes} />
);

export default ProductNav;
