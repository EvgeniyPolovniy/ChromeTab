import React, { Component } from 'react'

import SettingCurrencyItem from './SettingCurrencyItem'

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
    let avtions = this.props.actions
    return (
      <div className={'bg-setings ' + classN }>
        <div href="#" className="btn" onClick={this.handleClick} >
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className={'seting-content ' + classN }>
          <h2>Display currency:</h2>
          <h3>Currency rate get from <a href="https://www.poloniex.com">poloniex.com</a></h3>
          <div className='currency-list'>
            { settingCurrencyList.map( function(currency, ) {
              return <SettingCurrencyItem key={currency.id} data={currency} action={avtions}/>
            })}
          </div>
          <h2>Random background image:</h2>
          <h3>Get from <a href="https://unsplash.com">unsplash.com</a></h3>
        </div>
      </div>
    )
  }
}
