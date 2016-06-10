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
    case 'UPDATE_TIME':
      return {
        ...state,
        time: action.time.toLocaleString(state.time24 ? 'ru' : 'en-US', timeOptions),
        date: action.time.toLocaleString(state.localeRu ? 'ru' : 'en-US', dateOptions)
      }
    case 'UPDATE_DATE_LOCAL':
      return {
        ...state,
        localeRu: action.isRu,
      }
    case 'UPDATE_TIME_LOCAL':
      return {
        ...state,
        time24: action.isRu,
      }
    default:
      return state
  }
}

const timeWraper = (item) => {
  let result = (item.toString().length == 1) ? ('0'+ item) : item;
  return result
}
const normalizeTime = (time) => {
  let normalTime = timeWraper(time.getHours()) + ":" + timeWraper(time.getMinutes());
  return normalTime;
}

const dateOptions = {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
};
const timeOptions = {
  hour: 'numeric',
  minute: 'numeric',
};
