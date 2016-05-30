export const initialState = {
  currency: [
    {
      id: 1,
      price: 0,
      type: 'UAH',
      toFixed: 2,
      name: 'uah',
      firstCurrency: 'START',
      secondCurrency: 'BTCD'
    },
    {
      id: 2,
      price: 0,
      type: 'USDT_BTC',
      toFixed: 2,
      name: 'btc',
      firstCurrency: 'BTC',
      secondCurrency: 'START'
    },
    {
      id: 3,
      price: 0,
      type: 'USDT_ETH',
      toFixed: 2,
      name: 'eth-dol',
      firstCurrency: 'ETH-alt',
      secondCurrency: 'START'
    },
    {
      id: 4,
      price: 0,
      type: 'BTC_ETH',
      toFixed: 6,
      name: 'eth-btc',
      firstCurrency: 'ETH-alt',
      secondCurrency: 'BTC'
    },
    {
      id: 5,
      price: 0,
      type: 'BTC_LSK',
      toFixed: 6,
      name: 'lisk',
      firstCurrency: 'LISK-alt',
      secondCurrency: 'BTC'
    },
    {
      id: 6,
      price: 0,
      type: 'BTC_DAO',
      toFixed: 6,
      name: 'dao',
      firstCurrency: 'DGD',
      secondCurrency: 'BTC'
    }
  ],
  rates: {},
  interval: 30000
};
