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
    return (
      <div>
        <h1 className="time">
          {this.props.time}
        </h1>
        <h2 className="date">
          {this.props.date}
        </h2>
      </div>
    )
  }
}
