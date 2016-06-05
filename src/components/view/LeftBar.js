import React, { Component, PropTypes } from 'react'
import Time from './Time'
import Currency from './Currency'

class LeftBar extends Component {
  render() {
    return (
      <div className="left-bar">
        <Time/>
        <Currency currency={this.props.currency} interval={this.props.interval} actions={this.props.actions}/>
      </div>
    )
  }
}

export default LeftBar
