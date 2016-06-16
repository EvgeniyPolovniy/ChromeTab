import React, { Component } from 'react'
import { bindActionCreators } from "redux";
import { connect  } from "react-redux";

import LeftBar from './view/LeftBar'
import RightBar from './view/RightBar'

import * as currencyAction from './store/currencyAction'
import * as settingsAction from './store/settingsAction'
import * as timeAction from './store/timeAction'

class App extends Component {
  bgStyle = {
    backgroundImage: 'url(https://source.unsplash.com/collection/' + this.props.bgChannel + '/2560x1600)',
  }
  render() {
    const { currency, interval, actionsCurrency, actionsTime, time, date, time24, actionsSettings, localeRu, bgChannel } = this.props
    return (
      <div className="main" style = { this.bgStyle } >
          <LeftBar
            currency = { currency }
            interval = { interval }
            actions = { actionsCurrency }
            timeActions = { actionsTime }
            time= { time }
            date= { date }
            time24 = { time24 }
          />
          <RightBar
            currency = { currency }
            actions = { actionsSettings }
            timeActions = { actionsTime }
            localeRu = { localeRu }
            time24 = { time24 }
            bgChannel = { bgChannel }
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
    localeRu: state.currencyReducer.localeRu,
    bgChannel: state.currencyReducer.bgChannel
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
