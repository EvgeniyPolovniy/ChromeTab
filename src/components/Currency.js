import React, { Component } from 'react'
import { bindActionCreators } from "redux";
import CurrencyItem from './CurrencyItem'
import * as currencyAction from '../AC/currencyAction'
import { connect } from "react-redux";
import TotalUsd from './TotalUsd'

class Currency extends Component {
  constructor(props) {
    super(props);

    props.actions.getRateUah();

    setInterval( () => {
      props.actions.getRateUah();
    }, props.interval );

  }
  render() {
    const { currencyArr } = this.props;
    const totalData = {
      btcToUsd: 1,
      ethToUsd: 1,
      ethToBtc: 1
    };
    return (
      <div className="currency-block-wrapper">
        { currencyArr.map( function(currency) {
          if (currency.visible) {
            if (currency.type === 'USDT_BTC') {
              totalData.btcToUsd = parseFloat(currency.last, 10)
            }
            if (currency.type === 'USDT_ETH') {
              totalData.ethToUsd = parseFloat(currency.last, 10)
            }
            if (currency.type === 'BTC_ETH') {
              totalData.ethToBtc = parseFloat(currency.last, 10)
            }
            return <CurrencyItem key={currency.id} data={currency}/>
          }
        })}
        <TotalUsd data={totalData}/>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    interval: state.configReducer.interval,
    currencyArr: state.currencyReducer.currency
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(currencyAction, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Currency)
