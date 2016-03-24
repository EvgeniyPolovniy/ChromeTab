import React, { Component, PropTypes } from 'react'

class Curency extends Component {
  render() {
    return (
      <div className="currency-block-wrapper">
        <span className="currency-block uah loading">
          <span className="left-currency">
            <span>1</span>
            <i className="fa fa-usd"></i>
            <span>=&nbsp;</span>
          </span>
          <span className="currency-wrap">
            <div className="ball-triangle-path"><div></div><div></div><div></div></div>
            <span className="currency"></span>
            <span>&#8372;</span>
          </span>
        </span>
        <span className="currency-block btc loading">
          <span className="left-currency">
            <span>1</span>
            <i className="fa fa-btc"></i>
            <span>=&nbsp;</span>
          </span>
          <span className="currency-wrap">
            <div className="ball-triangle-path"><div></div><div></div><div></div></div>
            <span className="currency"></span>
            <i className="fa fa-usd"></i>
          </span>
        </span>
        <span className="currency-block eth eth-dol loading">
          <span className="left-currency">
            <span>1</span>
            <span>&Xi;</span>
            <span>=&nbsp;</span>
          </span>
          <span className="currency-wrap">
            <div className="ball-triangle-path"><div></div><div></div><div></div></div>
            <span className="currency"></span>
            <i className="fa fa-usd"></i>
          </span>
        </span>
        <span className="currency-block eth eth-btc loading">
          <span className="left-currency">
            <span>1</span>
            <span>&Xi;</span>
            <span>=&nbsp;</span>
          </span>
          <span className="currency-wrap">
            <div className="ball-triangle-path"><div></div><div></div><div></div></div>
            <span className="currency"></span>
            <i className="fa fa-btc"></i>
          </span>
        </span>
      </div>
    )
  }
}

export default Curency
