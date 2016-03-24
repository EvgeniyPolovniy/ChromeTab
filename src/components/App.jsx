import React, { Component } from 'react'
import LeftBar from './view/LeftBar.jsx'
import RightBar from './view/RightBar.jsx'

export default class App extends Component {
  render() {
    return (
      <div className="main">
          <LeftBar />
          <RightBar />
      </div>
    )
  }
}
