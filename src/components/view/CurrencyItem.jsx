import React, { Component } from 'react'

export default class CurrencyItem extends Component {
  render() {
    return (
      <span className={'currency-block loading ' + this.props.data.name}>
        <span className="left-currency">
          <span>1&nbsp;</span>
          <i className={'cc ' + this.props.data.firstCurrency}></i>
          <span>&nbsp;=&nbsp;</span>
        </span>
        <span className="currency-wrap">
          <div className="ball-triangle-path"><div></div><div></div><div></div></div>
          <span className="currency">{this.props.data.price}</span>&nbsp;
          <i className={'cc ' + this.props.data.secondCurrency}></i>
        </span>
      </span>
    )
  }
}
