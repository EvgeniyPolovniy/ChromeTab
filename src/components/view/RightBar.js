import React, { Component, PropTypes } from 'react'
import Settings from './Settings'

export default class RightBar extends Component {
  render() {
    return (
      <div className="right-bar">
        <Settings
          currency={this.props.currency}
          actions={this.props.actions}
          localeRu={this.props.localeRu}
          time24={this.props.time24}
          timeActions={this.props.timeActions}
        />
        <span className="first"></span>
        <span className="second"></span>
      </div>
    )
  }
}
