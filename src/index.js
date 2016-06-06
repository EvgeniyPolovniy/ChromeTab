import '../scss/main.scss'
import React from 'react'
import { render } from 'react-dom'
import { createStore, bindActionCreators, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
// import logger from 'redux-logger';
import { Provider, connect  } from "react-redux";

import App from './components/App'
import reducers from "./components/store/indexReducers"

import { loadState, saveState } from './components/store/localStorage';

const persistedState = loadState();

const Store = createStore(
  reducers,
  persistedState,
  applyMiddleware(thunk)
  //applyMiddleware(thunk, logger())
)

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
)
