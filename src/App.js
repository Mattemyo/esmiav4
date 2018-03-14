import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <SlideSwitch>
        <Route exact path="/" component={HomePage} />
      </SlideSwitch>
    );
  }
}

export default App;
