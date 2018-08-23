import React, { Component } from 'react';

import PastEvents from './components/past-events/past-events';
import Weather from './components/weather/weather';
import StockMarket from './components/stock-market/stock-market';
import ExchangeRate from './components/exchange-rates/exchange-rates';
import './App.css';
import load from './loading.svg';


class App extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ loading: false });
    }, 2000);
  }

  render() {
    const { loading } = this.state;
    return (
      <div>
        {loading
          ? <div className="preloader" style={{background: `#fff url(${load}) no-repeat center center`}} /> : null
        }
        <div className="row">
          <div className="col-md-3">
            <PastEvents />
          </div>
          <div className="col-md-3">
            <Weather />
          </div>
          <div className="col-md-3">
            <StockMarket />
          </div>
          <div className="col-md-3">
            <ExchangeRate />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
