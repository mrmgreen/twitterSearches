import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import rootReducer from './reducers';
import App from './App';
import Root from './Root';

const history = createHistory();
const store = createStore(rootReducer);

ReactDOM.render((
<Provider store={store}>
  <ConnectedRouter history={history}>
    <Root />
  </ConnectedRouter>
</Provider>)
, document.getElementById('root'));
