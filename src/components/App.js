import React, { Component } from 'react'
import { bindActionCreators } from "redux";
import { connect  } from "react-redux";

import LeftBar from './view/LeftBar'
import RightBar from './view/RightBar'

import * as currencyAction from './store/currencyAction'
import * as settingsAction from './store/settingsAction'
import * as timeAction from './store/timeAction'

class App extends Component {
  render() {
    return (
      <div className="main">
          <LeftBar
            currency={this.props.currency}
            interval={this.props.interval}
            actions={this.props.actionsCurrency}
            timeActions={this.props.actionsTime}
            time={this.props.time}
            date={this.props.date}
            time24={this.props.time24}
          />
          <RightBar
            currency={this.props.currency}
            actions={this.props.actionsSettings}
            timeActions={this.props.actionsTime}
            localeRu={this.props.localeRu}
            time24={this.props.time24}
          />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    currency: state.currencyReducer.currency,
    interval: state.currencyReducer.interval,
    time: state.currencyReducer.time,
    date: state.currencyReducer.date,
    time24: state.currencyReducer.time24,
    localeRu: state.currencyReducer.localeRu
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actionsCurrency: bindActionCreators(currencyAction, dispatch),
    actionsSettings: bindActionCreators(settingsAction, dispatch),
    actionsTime: bindActionCreators(timeAction, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
