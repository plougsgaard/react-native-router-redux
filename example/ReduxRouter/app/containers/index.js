import React, { Component } from 'react-native';
import { applyMiddleware, createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux/native';
import createLogger from 'redux-logger';

import * as reducers from '../reducers';
import Application from './app';

const logger = createLogger();
const createStoreWithMiddleware = applyMiddleware(logger)(createStore);
const store = createStoreWithMiddleware(combineReducers(reducers))

export default class AppContainer extends Component {
  render() {
    return (
      <Provider store={store}>
        {() => <Application />}
      </Provider>
    );
  }
}
