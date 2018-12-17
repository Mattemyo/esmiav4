import React, { Component } from 'react';

import { Route, Redirect, Switch } from 'react-router-dom';
import './App.css';
import SlideSwitch from './components/transitions/SlideSwitch';
import CloseAndOpen from './components/transitions/CloseAndOpen';
import HomePage from './components/pages/HomePage';
import AboutPage from './components/pages/AboutPage';
import ProductsPage from './components/pages/ProductsPage';
import ContactPage from './components/pages/ContactPage';
import ResponsiveContainer from './components/ResponsiveContainer';

const App = () => (
  <ResponsiveContainer>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/home" component={HomePage} />
      <Route exact path="/products" component={ProductsPage} />
      <Route exact path="/about" component={AboutPage} />
      <Route exact path="/contact" component={ContactPage} />
      {/* TODO: create withRedirectMessage */}
      <Route component={HomePage} />
    </Switch>
  </ResponsiveContainer>
);

export default App;
