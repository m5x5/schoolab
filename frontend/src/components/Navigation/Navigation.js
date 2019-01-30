import {Route, Switch} from 'react-router-dom';
import React, {Component} from 'react';
import './Navigation.css';
import logo from '../../logo.png';
class App extends Component {
  render() {
    return (<nav>
      <span><img src={logo} id="logo" alt="logo"/></span>
      <span>Home</span>
    </nav>);
  }
}

export default App;
