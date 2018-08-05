import React from 'react';
import PastEvents from './components/past-events/past-events';
import Weather from './components/weather/weather';
import StockMarket from './components/stock-market/stock-market';
import './App.css';

const App = () => (
  <div className="">
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
    </div>
  </div>
);

export default App;
