import React, { Component, PropTypes } from 'react'
import Settings from './Settings'

export default class RightBar extends Component {
  render() {
    return (
      <div className="right-bar">
        <Settings currency={this.props.currency} actions={this.props.actions}/>
        <span className="first"></span>
        <span className="second"></span>
      </div>
    )
  }
}
