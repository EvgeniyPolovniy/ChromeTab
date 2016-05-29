import React, { Component } from 'react'
import { bindActionCreators } from "redux";
import { connect  } from "react-redux";

import CurrencyItem from './CurrencyItem.jsx'
import * as currencyAction from '../store/currencyAction'

class Curency extends Component {
  render() {
    let currencyList = this.props.currency
    return (
      <div className="currency-block-wrapper">
        { currencyList.map( function(currency) {
          return <CurrencyItem key={currency.id} data={currency}/>
        })}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { currency: state }
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(currencyAction, dispatch) }
}

export default connect(mapStateToProps, mapDispatchToProps)(Curency)
