import React, { Component } from 'react'

import CurrencyItem from './CurrencyItem'

export default class Curency extends Component {
  constructor(props) {
    super(props);

    props.actions.getRateUah();

    setInterval( () => {
      props.actions.getRateUah();
    }, props.interval );

  }
  render() {
    let currencyList = this.props.currency
    return (
      <div className="currency-block-wrapper">
        { currencyList.map( function(currency) {
          if (currency.visible) {
            return <CurrencyItem key={currency.id} data={currency}/>
          }
        })}
      </div>
    )
  }
}
