import React, { Component } from 'react'

export default class SettingCurrencyItem extends Component {
  render() {
    return (
      <span className='testClass'>
        {this.props.data.name}
      </span>
    )
  }
}
