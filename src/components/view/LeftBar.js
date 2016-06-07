import React, { Component, PropTypes } from 'react'
import Time from './Time'
import Currency from './Currency'

class LeftBar extends Component {
  render() {
    return (
      <div className="left-bar">
        <Time
          interval={this.props.interval}
          actions={this.props.timeActions}
          time={this.props.time}
          date={this.props.date}
          time24={this.props.time24}
        />
        <Currency currency={this.props.currency} interval={this.props.interval} actions={this.props.actions} />
      </div>
    )
  }
}

export default LeftBar
