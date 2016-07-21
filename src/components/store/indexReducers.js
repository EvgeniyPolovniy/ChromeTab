import { combineReducers } from 'redux'

import currencyReducer from './currencyReducer'
import timeReducer from './timeReducer'

export default combineReducers({
  currencyReducer,
  timeReducer
})
