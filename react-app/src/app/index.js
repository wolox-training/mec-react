import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Game from './screens/Game';
import RegisterFormContainer from './screens/Login/index';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={RegisterFormContainer} />
          <Route path="/game" component={Game} />
        </Switch>
      </Router>
    );
  }
}

export default App;
