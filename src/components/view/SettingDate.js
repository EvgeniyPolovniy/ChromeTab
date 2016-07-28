import React, { Component } from 'react'

export default class SettingDate extends Component {
  constructor(props) {
    super(props);
  }

  onChange = (e) => {
    let isRu = e.target.value == 'ru'
    this.props.action.updateLocaleSetting(isRu);
    this.props.action.updateTime();
  }

  render() {
    const { localeRu } = this.props
    return (
      <div className='date-list' onChange={ this.onChange }>
        <label className="setting-currency-item">
          <input
            type='radio'
            name='locale'
            value='ru'
          />
          <span className={ localeRu ? 'checkbox icon-check-square-o' : 'checkbox icon-square-o' } ></span>
          <span>Russian</span>
        </label>
        <label className="setting-currency-item">
          <input
            type='radio'
            name='locale'
            value='en-US'
          />
        <span className={ !localeRu ? 'checkbox icon-check-square-o' : 'checkbox icon-square-o' } ></span>
          <span>English</span>
        </label>
      </div>
    )
  }
}
