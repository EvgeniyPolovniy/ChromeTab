import React, { Component } from 'react'

export default class CurrencyItem extends Component {
  render() {
    const { name, firstCurrency, publickFirst, price, secondCurrency, publickSecond, percentChange } = this.props.data
    return (
      <span className={'currency-block ' + name}>
        <span className="left-currency">
          <span>1&nbsp;</span>
          <span className="currency-abbr-wrap">
            <i className={'cc ' + firstCurrency}></i>
            <span className="currency-abbr">{publickFirst}</span>
          </span>
          <span>&nbsp;=&nbsp;</span>
        </span>
        <span className="currency-wrap">
          <div className="ball-triangle-path"><div></div><div></div><div></div></div>
          <span className="currency">{price}</span>&nbsp;
          <span className="currency-abbr-wrap">
            <i className={'cc ' + secondCurrency}></i>
            <span className="currency-abbr">{publickSecond}</span>
          </span>
        </span>
        <span className="after-trend">{percentChange}</span>
      </span>
    )
  }
}
