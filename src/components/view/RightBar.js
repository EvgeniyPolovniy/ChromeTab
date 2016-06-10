import React, { Component, PropTypes } from 'react'
import Settings from './Settings'

export default class RightBar extends Component {
  render() {
    const { currency, actions, localeRu, time24, timeActions } = this.props;
    return (
      <div className="right-bar">
        <Settings
          currency={currency}
          actions={actions}
          localeRu={localeRu}
          time24={time24}
          timeActions={timeActions}
        />
        <span className="first"></span>
        <span className="second"></span>
      </div>
    )
  }
}
