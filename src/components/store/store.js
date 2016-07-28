export const initialCurrencyState = {
  currency: [{
    id: 1,
    price: 0,
    type: 'UAH',
    toFixed: 2,
    name: 'uah',
    visible: false,
    percentChange: 0,
    publickFirst: 'USD',
    publickSecond: 'UAH',
    firstCurrency: 'START',
    secondCurrency: 'BTCD'
  },{
    id: 2,
    price: 0,
    type: 'RUB',
    toFixed: 2,
    name: 'rub',
    visible: false,
    percentChange: 0,
    publickFirst: 'USD',
    publickSecond: 'RUB',
    firstCurrency: 'START',
    secondCurrency: 'BTCD'
  },{
    id: 3,
    price: 0,
    type: 'USDT_BTC',
    toFixed: 2,
    name: 'btc',
    visible: true,
    percentChange: 0,
    publickFirst: 'BTC',
    publickSecond: 'USD',
    firstCurrency: 'BTC',
    secondCurrency: 'START'
  },{
    id: 4,
    price: 0,
    type: 'USDT_ETH',
    toFixed: 2,
    name: 'eth-dol',
    visible: true,
    percentChange: 0,
    publickFirst: 'ETH',
    publickSecond: 'USD',
    firstCurrency: 'ETH-alt',
    secondCurrency: 'START'
  },{
    id: 5,
    price: 0,
    type: 'BTC_ETH',
    toFixed: 8,
    name: 'eth-btc',
    visible: true,
    percentChange: 0,
    publickFirst: 'ETH',
    publickSecond: 'BTC',
    firstCurrency: 'ETH-alt',
    secondCurrency: 'BTC'
  },{
    id: 6,
    price: 0,
    type: 'BTC_ETC',
    toFixed: 8,
    name: 'etc-btc',
    visible: true,
    percentChange: 0,
    publickFirst: 'ETC',
    publickSecond: 'BTC',
    firstCurrency: 'ETH-alt',
    secondCurrency: 'BTC'
  },{
    id: 7,
    price: 0,
    type: 'BTC_LSK',
    toFixed: 8,
    name: 'lisk',
    visible: true,
    percentChange: 0,
    publickFirst: 'LISK',
    publickSecond: 'BTC',
    firstCurrency: 'LISK-alt',
    secondCurrency: 'BTC'
  },{
    id: 8,
    price: 0,
    type: 'BTC_DAO',
    toFixed: 8,
    name: 'dao',
    visible: true,
    percentChange: 0,
    publickFirst: 'DAO',
    publickSecond: 'BTC',
    firstCurrency: 'DGD',
    secondCurrency: 'BTC'
  },{
    id: 9,
    price: 0,
    type: 'BTC_DASH',
    toFixed: 8,
    name: 'DASH',
    visible: false,
    percentChange: 0,
    publickFirst: 'DASH',
    publickSecond: 'BTC',
    firstCurrency: 'DASH',
    secondCurrency: 'BTC'
  },{
    id: 10,
    price: 0,
    type: 'BTC_LTC',
    toFixed: 8,
    name: 'litecoin',
    visible: false,
    percentChange: 0,
    publickFirst: 'Litecoin',
    publickSecond: 'BTC',
    firstCurrency: 'LTC',
    secondCurrency: 'BTC'
  },{
    id: 11,
    price: 0,
    type: 'BTC_DOGE',
    toFixed: 8,
    name: 'dogecoin',
    visible: false,
    percentChange: 0,
    publickFirst: 'Dogecoin',
    publickSecond: 'BTC',
    firstCurrency: 'DOGE',
    secondCurrency: 'BTC'
  },{
    id: 12,
    price: 0,
    type: 'BTC_NXT',
    toFixed: 8,
    name: 'nxt',
    visible: false,
    percentChange: 0,
    publickFirst: 'NXT',
    publickSecond: 'BTC',
    firstCurrency: 'NXT',
    secondCurrency: 'BTC'
  },{
    id: 13,
    price: 0,
    type: 'BTC_XMR',
    toFixed: 8,
    name: 'monero',
    visible: false,
    percentChange: 0,
    publickFirst: 'Monero',
    publickSecond: 'BTC',
    firstCurrency: 'XMR',
    secondCurrency: 'BTC'
  },{
    id: 14,
    price: 0,
    type: 'BTC_XRP',
    toFixed: 8,
    name: 'Ripple',
    visible: false,
    percentChange: 0,
    publickFirst: 'Ripple',
    publickSecond: 'BTC',
    firstCurrency: 'XRP',
    secondCurrency: 'BTC'
  }],
  rates: {}
};

export const initialTimeState = {
  time: 0,
  date: 0,
  time24: true,
  localeRu: true,
}

export const initialConfigState = {
  interval: 30000,
  bgChannel: 237739
}
