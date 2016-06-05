import React, { Component } from 'react'

export default class CurrencyItem extends Component {
  render() {
    return (
      <span className={'currency-block ' + this.props.data.name}>
        <span className="left-currency">
          <span>1&nbsp;</span>
          <span className="currency-abbr-wrap">
            <i className={'cc ' + this.props.data.firstCurrency}></i>
            <span className="currency-abbr">{this.props.data.publickFirst}</span>
          </span>
          <span>&nbsp;=&nbsp;</span>
        </span>
        <span className="currency-wrap">
          <div className="ball-triangle-path"><div></div><div></div><div></div></div>
          <span className="currency">{this.props.data.price}</span>&nbsp;
          <span className="currency-abbr-wrap">
            <i className={'cc ' + this.props.data.secondCurrency}></i>
            <span className="currency-abbr">{this.props.data.publickSecond}</span>
          </span>
        </span>
      </span>
    )
  }
}
