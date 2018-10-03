import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import logger from './logger';
import reducer from '../reducer';
import authCookie from './authCookie';

const middleware = [
  logger,
  thunk,
  authCookie,
];

export default () =>
  createStore(
    reducer,
    composeWithDevTools(
      applyMiddleware(...middleware)
    )
  );