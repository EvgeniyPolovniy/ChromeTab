import '../scss/main.scss'
import React from 'react'
import { render } from 'react-dom'
import { createStore, bindActionCreators, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { Provider, connect  } from "react-redux";

import App from './components/App'
import reducers from "./components/store/indexReducers"

const Store = createStore(
  reducers,
  applyMiddleware(thunk)
  //applyMiddleware(thunk, logger())
)

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
