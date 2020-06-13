import React, { useEffect } from 'react';
import Chart from './chart';
import stockData from './aapl_data';
import stockData2 from './aapl_data2';
import TransactionForm from './transaction_form';
import { useSelector, useDispatch } from 'react-redux';
import { getNews } from '../../actions/news_actions';

const TickerShow = (props) => {
  const news = useSelector(state => state.entities.news);
  const dispatch = useDispatch();

  useEffect(() => {
    if (news.length !== 0) return;
    dispatch(getNews());
  }, [])

  return (
    <div className="ticker-show-container">
      <div className="ticker-control">
        <Chart historical={{"1m": stockData2, "1d": stockData}} />
        <TransactionForm tickerSymbol={"AAPL"} stockPrice={0} />
      </div>
    </div>
  )
}

export default TickerShow;