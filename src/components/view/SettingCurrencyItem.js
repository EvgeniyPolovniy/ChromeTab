import React, { Component } from 'react'

export default class SettingCurrencyItem extends Component {
  constructor(props) {
    super(props);
  }

  onChange = () => {
    this.props.action.updateSettingCurrency(this.props.data.id);
  }

  render() {
    const { visible, publickFirst, publickSecond } = this.props.data
    return (
      <label className="setting-currency-item">
        <input
          type="checkbox"
          checked={visible}
          onChange={this.onChange}
        />
        <span className={visible ? 'checkbox icon-check-square-o' : 'checkbox icon-square-o'} ></span>
        {publickFirst}<span> - </span>{publickSecond}
      </label>
    )
  }
}
