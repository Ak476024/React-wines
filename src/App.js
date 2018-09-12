import React, { Component } from 'react';
import { Route, Switch, HashRouter } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Index from './components/layout/Index';
import Details from './components/tracks/Details';

import './App.css';


class App extends Component {
  render() {
    return (
      <HashRouter >
        <React.Fragment>
          <Navbar />
          <div className="container">
            <Switch>
              <Route exact path='/' component={Index} />
              <Route path='/lyrics/track/:id' component={Details} />
            </Switch>
          </div>
        </React.Fragment>
      </HashRouter>
    );
  }
}

export default App;
