import React, { useEffect } from 'react';
import Chart from './chart';
import stockData from './aapl_data';
import stockData2 from './aapl_data2';
import TransactionForm from './transaction_form';
import { useSelector, useDispatch } from 'react-redux';
import { getNews } from '../../actions/news_actions';
import NewsArticle from './new_article';
import TickerNav from './ticker-nav';
import { getStock } from '../../actions/stock_action';


const TickerShow = (props) => {
  const news = useSelector(state => state.entities.news);
  const historical = useSelector(state => state.entities.historical);
  const price = useSelector(state => state.entities.price);
  const dispatch = useDispatch();

  useEffect(() => {
    if (news.length !== 0) return;
    dispatch(getStock({ticker: props.match.params.sym}));
  }, [props.match.params.sym])

  if (historical["1d"] === undefined || price === null) return null;

  return (
    <div className="ticker-show-container">
      <TickerNav />
      <div className="ticker-data">
        <Chart historical={historical} symbol={props.match.params.sym} stockPrice={price}/>
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
      <TransactionForm tickerSymbol={props.match.params.sym} stockPrice={price} />
    </div>
  )
}

export default TickerShow;