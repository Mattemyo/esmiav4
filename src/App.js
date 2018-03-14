import React, { Component } from 'react';

import { Route, Redirect } from 'react-router-dom';
import './App.css';
import SlideSwitch from './components/transitions/SlideSwitch';
import HomePage from './components/pages/HomePage';
import ResponsiveContainer from './components/ResponsiveContainer';

class App extends Component {
  render() {
    return (
      <SlideSwitch>
        <ResponsiveContainer>
          <Route exact path="/" render={() => (<Redirect to="/home" />)} />
          <Route exact path="/home" component={HomePage} />
        </ResponsiveContainer>
      </SlideSwitch>
    );
  }
}

export default App;
