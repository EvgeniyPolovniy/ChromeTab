import React, { Component } from 'react'

export default class SettingTime extends Component {
  constructor(props) {
    super(props);
  }

  onChange = (e) => {
    let isRu = e.target.value == 'ru'
    this.props.action.updateTimeSetting(isRu);
    this.props.action.updateTime();
  }

  render() {
    const { time24 } = this.props
    return (
      <div className='time-list' onChange={this.onChange}>
        <label className="setting-currency-item">
          <input
            type='radio'
            name='time'
            value='ru'
          />
          <span className={time24 ? 'checkbox icon-check-square-o' : 'checkbox icon-square-o'} >&nbsp;</span>
          <span>24</span>
        </label>
        <label className="setting-currency-item">
          <input
            type='radio'
            name='time'
            value='en-US'
          />
          <span className={!time24 ? 'checkbox icon-check-square-o' : 'checkbox icon-square-o'} >&nbsp;</span>
          <span>12</span>
        </label>
      </div>
    )
  }
}
