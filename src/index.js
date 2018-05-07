import React from 'react';
import ReactDOM from 'react-dom';

import { composeWithDevTools } from "redux-devtools-extension";

import { createStore, applyMiddleware } from "redux";
import reducers from "./reducers";
import authMiddleware from "./reducers/authMiddleware";

import promiseMiddleware from 'redux-promise';

import { Provider } from "react-redux";

import App from './App';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(reducers, composeWithDevTools(applyMiddleware(promiseMiddleware, authMiddleware)));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
