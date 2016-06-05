import React, { Component } from 'react'
import LeftBar from './view/LeftBar'
import RightBar from './view/RightBar'

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
