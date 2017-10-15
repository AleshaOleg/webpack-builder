// @flow

import React from 'react';
import { HashRouter } from 'react-router-dom';
import history from './history';

import Routes from './Routes';

const App = () => (
  <HashRouter history={history}>
    <Routes />
  </HashRouter>
);

export default App;
