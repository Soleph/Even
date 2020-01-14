import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';

import Home from '../pages/Home';
import Notes from '../pages/Notes';

import history from './history';

const Routes = () => (
  <ConnectedRouter history={history}>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/notes" exact component={Notes} />
      <Route path="*" exact component={Home} />
    </Switch>
  </ConnectedRouter>
);

export default Routes;
