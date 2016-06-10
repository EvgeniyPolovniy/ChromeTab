import React, { Component, PropTypes } from 'react'

export default class Time extends Component {
  constructor(props) {
    super(props);

    props.actions.updateTime();

    setInterval( () => {
      props.actions.updateTime();
    }, props.interval );
  }

  render() {
    const { time, date } = this.props
    return (
      <div>
        <h1 className="time">{time}</h1>
        <h2 className="date">{date}</h2>
      </div>
    )
  }
}
