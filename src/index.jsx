// @flow

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import 'normalize.css';

import App from './App';
import store from './store';

import './index.pcss';

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('.app'),
);
