import React, { Component, PropTypes } from 'react'
import Time from './Time'
import Currency from './Currency'

export default class LeftBar extends Component {
  render() {
    const { interval, timeActions, time, date, time24, currency, actions } = this.props;
    return (
      <div className="left-bar">
        <Time
          interval={interval}
          actions={timeActions}
          time={time}
          date={date}
          time24={time24}
        />
        <Currency currency={currency} interval={interval} actions={actions} />
      </div>
    )
  }
}
