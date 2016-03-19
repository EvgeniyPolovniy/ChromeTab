import React, { Component, PropTypes } from 'react'
import LeftBar from '../components/view/LeftBar'
import RightBar from '../components/view/RightBar'

class App extends Component {
  render() {
    return (
      <div className="main">
        <LeftBar />
        <RightBar />
      </div>
    )
  }
}

export default App