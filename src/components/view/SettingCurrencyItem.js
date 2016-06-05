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
        <span>{this.props.data.publickFirst} - {this.props.data.publickSecond}</span>
      </label>
    )
  }
}
