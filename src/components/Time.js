import React, { Component, PropTypes } from 'react'

import { bindActionCreators } from "redux";
import { connect  } from "react-redux";

import * as timeAction from '../AC/timeAction'

class Time extends Component {
  constructor(props) {
    super(props);

    props.actions.updateTime();

    setInterval( () => {
      props.actions.updateTime();
    }, props.interval );
  }

  render() {
    const { time, date } = this.props;
    return (
      <div>
        <h1 className="time">{ time }</h1>
        <h2 className="date">{ date }</h2>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    interval: state.configReducer.interval,
    time: state.timeReducer.time,
    date: state.timeReducer.date
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(timeAction, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Time)
