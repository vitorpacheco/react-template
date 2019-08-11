import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import {composeWithDevTools} from 'redux-devtools-extension';

import rootReducers from './reducers';

const composeEnhancers = composeWithDevTools({});

const store = createStore(
  rootReducers,
  composeEnhancers(
    applyMiddleware(
      thunk,
      logger
    )
  ));

export default store;
