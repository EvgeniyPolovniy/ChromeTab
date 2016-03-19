import React, { Component, PropTypes } from 'react'

class Time extends Component {
  constructor(props) {
    super(props);
    this.state = {time: this.normalizeTime( new Date() )};
  }
  timeWraper(item) {
    let result = (item.toString().length == 1) ? ('0'+ item) : item;
    return result
  }
  normalizeTime(time) {
    let normalTime = this.timeWraper(time.getHours()) + ":" + this.timeWraper(time.getMinutes());
    return normalTime;
  }
  render() {
    return (
      <h1 className="time">
        {this.state.time.toString()}
      </h1>
    )
  }
}

export default Time
