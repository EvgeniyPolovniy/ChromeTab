import React, { Component } from 'react'

export default class SettingCurrencyItem extends Component {
  constructor(props) {
    super(props);
  }

  onChange = () => {
    this.props.action.updateSettingCurrency(this.props.data.id);
  }

  render() {
    return (
      <label className="setting-currency-item">
        <input
          type="checkbox"
          checked={this.props.data.visible}
          onChange={this.onChange}
        />
        <span className={this.props.data.visible ? 'checkbox icon-check-square-o' : 'checkbox icon-square-o'} ></span>
        {this.props.data.publickFirst}<span> - </span>{this.props.data.publickSecond}
      </label>
    )
  }
}
