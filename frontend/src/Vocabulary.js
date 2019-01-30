import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation.js';
import Content from './components/Content/Content.js';
import Header from './components/Header/Header.js';
import Footer from './components/Footer/Footer.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <Header />
        <Content />
        <Footer />
      </div>
    );
  }
}

export default App;
