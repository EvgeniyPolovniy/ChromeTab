import React, { Component, PropTypes } from 'react'

export default class Setings extends Component {
  constructor(props) {
    super(props);

    this.state = {
      is_active: false
    }
  }
  handleClick = () => {
    this.setState({is_active: !this.state.is_active});
  }
  render() {
    let classN = this.state.is_active ? 'is-active' : ''
    return (
      <div className="bg-setings">
        <a href="#" className="btn" onClick={this.handleClick} >
          <span></span>
          <span></span>
          <span></span>
        </a>
        <div className={'seting-content ' + classN }>
          <p>Тут будут настройки!</p>
        </div>
      </div>
    )
  }
}
