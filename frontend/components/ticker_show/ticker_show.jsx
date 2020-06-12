import React from 'react';
import Chart from './chart';
import stockData from './aapl_data';
import stockData2 from './aapl_data2';

const TickerShow = (props) => {
  return (
    <div>
      <Chart historical={{"1m": stockData2, "1d": stockData}} />
    </div>
  )
}

export default TickerShow;