import React, { Component } from 'react'
import { bindActionCreators } from "redux";
import { connect  } from "react-redux";

import LeftBar from './view/LeftBar'
import RightBar from './view/RightBar'

class App extends Component {
  bgStyle = {
    backgroundImage: 'url(https://source.unsplash.com/collection/' + this.props.bgChannel + '/2560x1600)',
  }
  render() {
    return (
      <div className="main" style = { this.bgStyle } >
          <LeftBar/>
          <RightBar/>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    bgChannel: state.currencyReducer.bgChannel
  }
}

export default connect(mapStateToProps)(App)
