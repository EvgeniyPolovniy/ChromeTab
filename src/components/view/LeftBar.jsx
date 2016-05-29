import React, { Component, PropTypes } from 'react'
import Time from './Time.jsx'
import Currency from './Currency.jsx'

class LeftBar extends Component {
  render() {
    return (
      <div className="left-bar">
        <Time/>
        <Currency />
      </div>
    )
  }
}

export default LeftBar
