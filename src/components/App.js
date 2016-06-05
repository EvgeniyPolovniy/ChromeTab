import React, { Component } from 'react'
import { bindActionCreators } from "redux";
import { connect  } from "react-redux";

import LeftBar from './view/LeftBar'
import RightBar from './view/RightBar'

import * as currencyAction from './store/currencyAction'
import * as settingsAction from './store/settingsAction'

class App extends Component {
  render() {
    return (
      <div className="main">
          <LeftBar currency={this.props.currency} interval={this.props.interval} actions={this.props.actionsCurrency}/>
          <RightBar currency={this.props.currency} actions={this.props.actionsSettings}/>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    currency: state.currencyReducer.currency,
    interval: state.currencyReducer.interval
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actionsCurrency: bindActionCreators(currencyAction, dispatch),
    actionsSettings: bindActionCreators(settingsAction, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
