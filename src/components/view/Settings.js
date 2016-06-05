import React, { Component } from 'react'
import { bindActionCreators } from "redux";
import { connect  } from "react-redux";

import SettingCurrencyItem from './SettingCurrencyItem'
import * as settingsAction from '../store/settingsAction'

export default class Settings extends Component {
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
    let settingCurrencyList = this.props.currency
    return (
      <div className="bg-setings">
        <a href="#" className="btn" onClick={this.handleClick} >
          <span></span>
          <span></span>
          <span></span>
        </a>
        <div className={'seting-content ' + classN }>
          <p>Display currency:</p>
          { settingCurrencyList.map( function(currency) {
            return <SettingCurrencyItem key={currency.id} data={currency} />
          })}
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    currency: state.currency
  }
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(settingsAction, dispatch) }
}

export default connect(mapStateToProps, mapDispatchToProps)(Settings)
