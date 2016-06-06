export const initialState = {
  currency: [{
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
  },{
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
  },{
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
  },{
    id: 4,
    price: 0,
    type: 'BTC_ETH',
    toFixed: 8,
    name: 'eth-btc',
    visible: true,
    publickFirst: 'ETH',
    publickSecond: 'BTC',
    firstCurrency: 'ETH-alt',
    secondCurrency: 'BTC'
  },{
    id: 5,
    price: 0,
    type: 'BTC_LSK',
    toFixed: 8,
    name: 'lisk',
    visible: true,
    publickFirst: 'LISK',
    publickSecond: 'BTC',
    firstCurrency: 'LISK-alt',
    secondCurrency: 'BTC'
  },{
    id: 6,
    price: 0,
    type: 'BTC_DAO',
    toFixed: 8,
    name: 'dao',
    visible: true,
    publickFirst: 'DAO',
    publickSecond: 'BTC',
    firstCurrency: 'DGD',
    secondCurrency: 'BTC'
  },{
    id: 7,
    price: 0,
    type: 'BTC_DASH',
    toFixed: 8,
    name: 'DASH',
    visible: false,
    publickFirst: 'DASH',
    publickSecond: 'BTC',
    firstCurrency: 'DASH',
    secondCurrency: 'BTC'
  },{
    id: 8,
    price: 0,
    type: 'BTC_LTC',
    toFixed: 8,
    name: 'litecoin',
    visible: false,
    publickFirst: 'Litecoin',
    publickSecond: 'BTC',
    firstCurrency: 'LTC',
    secondCurrency: 'BTC'
  },{
    id: 9,
    price: 0,
    type: 'BTC_DOGE',
    toFixed: 8,
    name: 'dogecoin',
    visible: false,
    publickFirst: 'Dogecoin',
    publickSecond: 'BTC',
    firstCurrency: 'DOGE',
    secondCurrency: 'BTC'
  },{
    id: 10,
    price: 0,
    type: 'BTC_NXT',
    toFixed: 8,
    name: 'nxt',
    visible: false,
    publickFirst: 'NXT',
    publickSecond: 'BTC',
    firstCurrency: 'NXT',
    secondCurrency: 'BTC'
  },{
    id: 11,
    price: 0,
    type: 'BTC_XMR',
    toFixed: 8,
    name: 'monero',
    visible: false,
    publickFirst: 'Monero',
    publickSecond: 'BTC',
    firstCurrency: 'XMR',
    secondCurrency: 'BTC'
  },{
    id: 12,
    price: 0,
    type: 'BTC_XRP',
    toFixed: 8,
    name: 'Ripple',
    visible: false,
    publickFirst: 'Ripple',
    publickSecond: 'BTC',
    firstCurrency: 'XRP',
    secondCurrency: 'BTC'
  }],
  rates: {},
  interval: 30000
};
