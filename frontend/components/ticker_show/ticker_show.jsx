import React, { useEffect, useCallback } from 'react';
import Chart from './chart';
import stockData from './aapl_data';
import stockData2 from './aapl_data2';
import TransactionForm from './transaction_form';
import { useSelector, useDispatch } from 'react-redux';
import { getNews } from '../../actions/news_actions';
import NewsArticle from './new_article';
import TickerNav from './ticker-nav';


const TickerShow = (props) => {
  const news = useSelector(state => state.entities.news);
  const dispatch = useDispatch();

  useEffect(() => {
    if (news.length !== 0) return;
    dispatch(getNews());
  }, [])

  return (
    <div className="ticker-show-container">
      <TickerNav />
      <div className="ticker-data">
        <Chart historical={{"1m": stockData2, "1d": stockData}} />
        <div className="news-feed">
          {news.map((article, i) => (
            <NewsArticle 
              key={i}
              imageUrl={article.urlToImage}
              title={article.title}
              source={article.source.name}
              summary={article.description}
            />
          ))}
        </div>
      </div>
      <TransactionForm tickerSymbol={"AAPL"} stockPrice={0} />
    </div>
  )
}

export default TickerShow;