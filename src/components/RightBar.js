import React, { Component, PropTypes } from 'react'
import Settings from './Settings'

export default class RightBar extends Component {
  render() {
    return (
      <div className="right-bar">
        <Settings />
        <span className="first">&nbsp;</span>
        <span className="second">&nbsp;</span>
      </div>
    )
  }
}
