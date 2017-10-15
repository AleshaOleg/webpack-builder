// @flow

import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

import Index from './containers/Index/Index';

export const urls = {
  index: '/',
};

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path={urls.index} component={Index} />
    </Switch>
  </Router>
);

export default Routes;
