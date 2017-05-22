import React, { Component } from 'react'
import { connect } from "react-redux";

class TotalUsd extends Component {
  render() {
    let btc = this.props.btc + (this.props.eth * this.props.data.ethToBtc);
    let usd = btc * this.props.data.btcToUsd;
    return (
      <span className="currency-block total">
        <span className="title">Total: </span>
        <span className="title">BTC: {btc.toFixed(8)}</span>
        <span className="title">USD: ${usd.toFixed(2)}</span>
      </span>
    )
  }
}

function mapStateToProps(state) {
  return {
    btc: state.configReducer.btc,
    eth: state.configReducer.eth
  }
}

function mapDispatchToProps(dispatch) {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(TotalUsd)
