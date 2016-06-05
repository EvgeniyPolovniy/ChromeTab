import axios from 'axios'

export const updateRate = (data) => {
  return {
    type: 'UPDATE_RATE',
    rates: data
  }
}
export const updateRateUah = (price) => {
  return {
    type: 'UPDATE_RATE_UAH',
    price: price
  }
}
export const updateCurrency = () => {
  return {
    type: 'UPDATE_CURRENCY'
  }
}

export const getRateUah = () => {
  const request = axios.get('http://query.yahooapis.com/v1/public/yql?q=select * from yahoo.finance.xchange where pair in ("USDUAH")&format=json&env=store://datatables.org/alltableswithkeys&callback=');
  return (dispatch) => {
    request.then(({data}) => {
      dispatch(getRate(data.query.results.rate.Rate))
    });
  }
}

export const getRate = (uah) => {
  const request = axios.get('https://poloniex.com/public?command=returnTicker');
  return (dispatch) => {
    request.then(({data}) => {
      data['UAH'] = {last: uah}
      dispatch(updateRate(data))
      dispatch(updateCurrency())
    });
  }
}
