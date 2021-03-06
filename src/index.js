import '../scss/main.scss'
import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware, compose } from "redux";
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { Provider, connect  } from "react-redux";

import App from './components/App'
import reducers from "./reducers/indexReducers"

import { loadState, saveState } from './store/localStorage';

const persistedState = loadState();

const Store = createStore(
  reducers,
  persistedState.state,
  compose(
    applyMiddleware(thunk),
    //applyMiddleware(thunk, logger()),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ),
);

Store.subscribe(() => {
  saveState(Store.getState());
});

function mapStateToProps(state) {
  return { store: state }
}

export default connect(mapStateToProps)(App)

render(
  <Provider store={Store} >
    <App />
  </Provider>,
  document.getElementById('root')
);
