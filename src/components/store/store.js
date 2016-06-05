export const initialState = {
  currency: [
    {
      id: 1,
      price: 0,
      type: 'UAH',
      toFixed: 2,
      name: 'uah',
      visible: true,
      publickFirst: 'USD',
      publickSecond: 'UAH',
      firstCurrency: 'START',
      secondCurrency: 'BTCD'
    },
    {
      id: 2,
      price: 0,
      type: 'USDT_BTC',
      toFixed: 2,
      name: 'btc',
      visible: true,
      publickFirst: 'BTC',
      publickSecond: 'USD',
      firstCurrency: 'BTC',
      secondCurrency: 'START'
    },
    {
      id: 3,
      price: 0,
      type: 'USDT_ETH',
      toFixed: 2,
      name: 'eth-dol',
      visible: true,
      publickFirst: 'ETH',
      publickSecond: 'USD',
      firstCurrency: 'ETH-alt',
      secondCurrency: 'START'
    },
    {
      id: 4,
      price: 0,
      type: 'BTC_ETH',
      toFixed: 6,
      name: 'eth-btc',
      visible: true,
      publickFirst: 'ETH',
      publickSecond: 'BTC',
      firstCurrency: 'ETH-alt',
      secondCurrency: 'BTC'
    },
    {
      id: 5,
      price: 0,
      type: 'BTC_LSK',
      toFixed: 6,
      name: 'lisk',
      visible: true,
      publickFirst: 'LISK',
      publickSecond: 'BTC',
      firstCurrency: 'LISK-alt',
      secondCurrency: 'BTC'
    },
    {
      id: 6,
      price: 0,
      type: 'BTC_DAO',
      toFixed: 6,
      name: 'dao',
      visible: true,
      publickFirst: 'DAO',
      publickSecond: 'BTC',
      firstCurrency: 'DGD',
      secondCurrency: 'BTC'
    }
  ],
  rates: {},
  interval: 30000
};
