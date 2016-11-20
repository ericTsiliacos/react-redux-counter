import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import './index.css';
import App, { Update } from './App';

ReactDOM.render(
  <Provider store={createStore(Update)}>
    <App />
  </Provider>,
  document.getElementById('root')
);
