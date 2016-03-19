import React, { Component, PropTypes } from 'react'
import Time from './Time'
import Curency from './Curency'

class LeftBar extends Component {
  render() {
    return (
      <div className="left-bar">
        <Time />
        <Curency />
      </div>
    )
  }
}

export default LeftBar