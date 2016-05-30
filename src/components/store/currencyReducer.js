import { initialState } from './store'

export default function currencyReducer(state = initialState, action) {
  switch (action.type) {
    case 'UPDATE_RATE':
      return {
        ...state,
        rates: action.rates
      }
    case 'UPDATE_RATE_UAH':
      let {rates} = state
      console.log(action.price);
      return {
        ...state,
        rates: {...rates, 'UAH': action.price}
      }
    case 'UPDATE_CURRENCY':
      let updateBlock = [];
      state.currency.map( function(currency, key) {
        let item = currency.type;
        let price = state.rates[item].last
        currency.price = parseFloat(price).toFixed(currency.toFixed)

        updateBlock.push(currency);
      })
      return {
        ...state,
        currency: updateBlock
      }
    default:
      return state
  }
}
