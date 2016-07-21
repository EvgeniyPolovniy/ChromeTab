import React, { Component } from 'react'
import { bindActionCreators } from "redux";
import CurrencyItem from './CurrencyItem'
import * as currencyAction from '../store/currencyAction'
import { connect  } from "react-redux";

class Curency extends Component {
  constructor(props) {
    super(props);

    props.actions.getRateUah();

    setInterval( () => {
      props.actions.getRateUah();
    }, props.interval );

  }
  render() {
    return (
      <div className="currency-block-wrapper">
        { this.props.currency.map( function(currency) {
          if (currency.visible) {
            return <CurrencyItem key={currency.id} data={currency}/>
          }
        })}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    interval: state.timeReducer.interval,
    currency: state.currencyReducer.currency,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(currencyAction, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Curency)
