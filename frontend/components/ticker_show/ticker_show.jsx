import React from 'react';
import Chart from './chart';
import stockData from './aapl_data';
import stockData2 from './aapl_data2';
import TransactionForm from './transaction_form';

const TickerShow = (props) => {
  return (
    <div>
      <div className="ticker-control">
        <Chart historical={{"1m": stockData2, "1d": stockData}} />
        <TransactionForm tickerSymbol={"AAPL"} stockPrice={0} />
      </div>
    </div>
  )
}

export default TickerShow;