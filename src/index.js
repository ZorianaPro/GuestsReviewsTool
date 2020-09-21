import React from 'react';
import ReactDOM from 'react-dom';
import config from './services/config';
import { applyMiddleware, compose, createStore } from 'redux';
import rootReducer from './redux/rootReducer';
import ReduxThunk from 'redux-thunk';
import { shim as finallyShim } from 'promise.prototype.finally';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider as StoreProvider } from 'react-redux';
import App from '../src/components/App';
import * as serviceWorker from './serviceWorker';
import './index.css';

finallyShim();

let devAdditions;
if (config.isDevelopment) {
  if (module.hot) {
    module.hot.accept();
  }

  if ('__REDUX_DEVTOOLS_EXTENSION__' in window) {
    devAdditions = window.__REDUX_DEVTOOLS_EXTENSION__();
  }
}

const middlewares = devAdditions
  ? compose(
    applyMiddleware(ReduxThunk),
    devAdditions
  )
  : applyMiddleware(ReduxThunk);

const store = createStore(
  rootReducer,
  undefined,
  middlewares
);

ReactDOM.render(
  <React.StrictMode>
    <StoreProvider store={ store }>
      <Router basename="/">
        <App />
      </Router>
    </StoreProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
