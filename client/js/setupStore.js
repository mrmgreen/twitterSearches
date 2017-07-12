import promiseMiddleware from 'redux-promise';
import { createStore, applyMiddleware } from 'redux';
import createHistory from 'history/createBrowserHistory';
import { routerMiddleware } from 'react-router-redux';

import combinedReducers from './reducers';
// import rootSaga from './rootSaga';

const setupStore = history => {
  const middleware = applyMiddleware(routerMiddleware(history));
  const store = createStore(
    combinedReducers,
    middleware
  );
  // createdSagaMiddleware.run(rootSaga);
  return store;
};

export default setupStore;
