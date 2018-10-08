import React, { Component } from 'react';
import { Route} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Dashboard from './components/dashboard';
import Auth from './components/auth';
import Nav from './components/nav';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          
          <h1 className="App-title">Ensembles</h1>
          <Nav />
        </header>
        <div className="App-intro">
          <Route exact path="/" component={Dashboard} />
          <Route exact path='/auth/:type' component={Auth} />
        </div>
      </div>
    );
  }
}

export default App;
