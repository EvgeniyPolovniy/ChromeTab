import React, { Component, PropTypes } from 'react'
import Time from './Time'
import Currency from './Currency'

export default class LeftBar extends Component {
  render() {
    return (
      <div className="left-bar">
        <Time />
        <Currency />
      </div>
    )
  }
}
