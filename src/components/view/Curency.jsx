import React, { Component, PropTypes } from 'react'

export default class Curency extends Component {
  render() {
    return (
      <div className="currency-block-wrapper">
        <span className="currency-block uah loading">
          <span className="left-currency">
            <span>1&nbsp;</span>
            <i className="cc START"></i>
            <span>&nbsp;=&nbsp;</span>
          </span>
          <span className="currency-wrap">
            <div className="ball-triangle-path"><div></div><div></div><div></div></div>
            <span className="currency"></span>&nbsp;
            <i className="cc BTCD"></i>
          </span>
        </span>
        <span className="currency-block btc loading">
          <span className="left-currency">
            <span>1&nbsp;</span>
            <i className="cc BTC"></i>
            <span>&nbsp;=&nbsp;</span>
          </span>
          <span className="currency-wrap">
            <div className="ball-triangle-path"><div></div><div></div><div></div></div>
            <span className="currency"></span>&nbsp;
            <i className="cc START"></i>
          </span>
        </span>
        <span className="currency-block eth eth-dol loading">
          <span className="left-currency">
            <span>1&nbsp;</span>
            <i className="cc ETH-alt"></i>
            <span>&nbsp;=&nbsp;</span>
          </span>
          <span className="currency-wrap">
            <div className="ball-triangle-path"><div></div><div></div><div></div></div>
            <span className="currency"></span>&nbsp;
            <i className="cc START"></i>
          </span>
        </span>
        <span className="currency-block eth eth-btc loading">
          <span className="left-currency">
            <span>1&nbsp;</span>
            <i className="cc ETH-alt"></i>
            <span>&nbsp;=&nbsp;</span>
          </span>
          <span className="currency-wrap">
            <div className="ball-triangle-path"><div></div><div></div><div></div></div>
            <span className="currency"></span>&nbsp;
            <i className="cc BTC"></i>
          </span>
        </span>
        <span className="currency-block lisk loading">
          <span className="left-currency">
            <span>1&nbsp;</span>
            <i className="cc LISK-alt"></i>
            <span>&nbsp;=&nbsp;</span>
          </span>
          <span className="currency-wrap">
            <div className="ball-triangle-path"><div></div><div></div><div></div></div>
            <span className="currency"></span>&nbsp;
            <i className="cc BTC"></i>
          </span>
        </span>
      </div>
    )
  }
}
