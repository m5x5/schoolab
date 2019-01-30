import React, {Component} from 'react';
import Navigation from './components/Navigation/Navigation.js';
import {Route, Switch} from 'react-router-dom';
import Content from './components/Content/Content.js';
import Header from './components/Header/Header.js';
import Footer from './components/Footer/Footer.js';
import Vocabulary from './Vocabulary.js';
import './App.css';

class App extends Component {
  render() {
    return (<div className="App">
      <Switch>
        <Route exact="exact" path="/" component={Vocabulary}/>
        <Route component={Vocabulary}/>
      </Switch>

      <Navigation/>
      <Header/>
      <Content/>
      <Footer/>
    </div>);
  }
}

export default App;
