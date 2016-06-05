import React, { Component, PropTypes } from 'react'
import Setings from './Setings'

export default class RightBar extends Component {
  render() {
    return (
      <div className="right-bar">
        <Setings />
        <span className="first"></span>
        <span className="second"></span>
      </div>
    )
  }
}
