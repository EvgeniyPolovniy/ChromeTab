import { initialCurrencyState } from './store'

export default function currencyReducer(state = initialCurrencyState, action) {
  switch (action.type) {
    case 'UPDATE_RATE':
      return {
        ...state,
        rates: action.rates
      }
    case 'UPDATE_RATE_UAH':
      let {rates} = state
      return {
        ...state,
        rates: {...rates, 'UAH': action.price}
      }
    case 'UPDATE_CURRENCY':
      let updateBlock = [];
      state.currency.map( function(currency, key) {
        let item = currency.type;
        let price = state.rates[item].last
        let percentChange = state.rates[item].percentChange || 0
        currency.price = parseFloat(price).toFixed(currency.toFixed)
        currency.percentChange = parseFloat(percentChange).toFixed(4)

        updateBlock.push(currency);
      })
      return {
        ...state,
        currency: updateBlock
      }
    case 'UPDATE_SETTING_CURRENCY':
      let updateBlock2 = [];
      state.currency.map( function(currency, key) {
        if (currency.id == action.id) {
          currency.visible = !currency.visible
        }
        updateBlock2.push(currency);
      })
      return {
        ...state,
        currency: updateBlock2
      }
    default:
      return state
  }
}
