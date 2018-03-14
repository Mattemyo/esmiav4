import React, { Component } from 'react';

import { Route, Redirect } from 'react-router-dom';
import './App.css';
import SlideSwitch from './components/transitions/SlideSwitch';
import HomePage from './components/pages/HomePage';
import ProductsPage from './components/pages/ProductsPage';
import ResponsiveContainer from './components/ResponsiveContainer';

const App = () => (
  <ResponsiveContainer>
    <SlideSwitch>
      <Route exact path="/" render={() => <Redirect to="/home" />} />
      <Route exact path="/home" component={HomePage} />
      <Route exact path="/products" component={ProductsPage} />
    </SlideSwitch>
  </ResponsiveContainer>
);

export default App;
