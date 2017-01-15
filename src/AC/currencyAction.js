import axios from 'axios'

export const updateRate = (data) => {
  return {
    type: 'UPDATE_RATE',
    rates: data
  }
};

export const updateRateUah = (price) => {
  return {
    type: 'UPDATE_RATE_UAH',
    price: price
  }
};

export const updateCurrency = () => {
  return {
    type: 'UPDATE_CURRENCY'
  }
};

export const getRateUah = () => {
  const request = axios.get( 'https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.xchange%20where%20pair%20in%20(%22USDUAH%22)&format=json&diagnostics=true&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=' );
  return (dispatch) => {
    request.then(({data}) => {
      dispatch(getRateRub(data.query.results.rate.Rate))
    });
  }
};

export const getRateRub = (uah) => {
  const request = axios.get( 'https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.xchange%20where%20pair%20in%20(%22USDRUB%22)&format=json&diagnostics=true&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=' );
  return (dispatch) => {
    request.then(({data}) => {
      dispatch(getRate(uah, data.query.results.rate.Rate))
    });
  }
};

export const getRate = (uah, rub) => {
  const request = axios.get('https://poloniex.com/public?command=returnTicker');
  return (dispatch) => {
    request.then(({data}) => {
      data['UAH'] = {last: uah};
      data['RUB'] = {last: rub};
      dispatch(updateRate(data));
      dispatch(updateCurrency())
    });
  }
};
