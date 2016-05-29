import { initialState } from './store'

export default function currencyReducer(state = initialState.currency, action) {
  switch (action.type) {
    case 'UPDATE_RATE':
      return {
        ...state,
        
      }
    default:
      return state
  }
}
