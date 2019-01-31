import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


// Components imports
import Navbar from './components/navigation/Navbar';
import Landing from './components/landing/Landing';
import Footer from './components/footer/Footer';

// Import styling
import './scss/main.scss';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path='/' component={Landing} />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
