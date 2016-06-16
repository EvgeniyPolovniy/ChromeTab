import React, { Component } from 'react'

import SettingCurrencyItem from './SettingCurrencyItem'
import SettingDate from './SettingDate'
import SettingTime from './SettingTime'

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
  handleTextChange = (e) => {
    this.props.actions.updateChannel(e.target.value || 237739)
  }
  render() {
    const { currency, actions, timeActions, localeRu, time24, bgChannel } = this.props
    let classN = this.state.is_active ? 'is-active' : ''
    return (
      <div className={'bg-setings ' + classN }>
        <div href="#" className="btn" onClick={this.handleClick} >
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className={'seting-content ' + classN }>
          <h2>Date and time:</h2>
          <h3>Set language for date</h3>
          <SettingDate localeRu={localeRu} action={timeActions}/>
          <h3>Set time format</h3>
          <SettingTime time24={time24} action={timeActions}/>
          <h2>Display currency:</h2>
          <h3>Currency rate get from <a href="https://www.poloniex.com">poloniex.com</a></h3>
          <div className='currency-list'>
            { currency.map( function(currency) {
              return <SettingCurrencyItem key={currency.id} data={currency} action={actions}/>
            })}
          </div>
          <h2>Random background image:</h2>
          <h3>Get from <a href="https://unsplash.com">unsplash.com</a></h3>
          <p className='channel-label'>Id channel:</p>
          <input
            type="number"
            value={bgChannel}
            onChange={this.handleTextChange}
          />
        </div>
      </div>
    )
  }
}
