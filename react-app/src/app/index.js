import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import { history } from '../redux/store';

import Game from './screens/Game';
import Login from './screens/Login/index';
import Profile from './screens/Profile';
import Topbar from './components/Topbar';

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={Login} />
          <div>
            <Topbar />
            <Route path="/profile" component={Profile} />
            <Route path="/game" component={Game} />
          </div>
        </Switch>
      </Router>
    );
  }
}

export default App;
