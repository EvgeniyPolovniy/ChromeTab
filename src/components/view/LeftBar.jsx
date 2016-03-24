import React, { Component, PropTypes } from 'react'
import Time from './Time.jsx'
import Curency from './Curency.jsx'

class LeftBar extends Component {
  render() {
    return (
      <div className="left-bar">
        <Time/>
        <Curency />
      </div>
    )
  }
}

export default LeftBar
