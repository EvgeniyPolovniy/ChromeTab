import { combineReducers } from 'redux'

import currencyReducer from './currencyReducer'
import timeReducer from './timeReducer'
import configReducer from './configReducer'

export default combineReducers({
  currencyReducer,
  timeReducer,
  configReducer
})
