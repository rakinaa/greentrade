import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getNews } from '../../actions/news_actions';
import { getStock } from '../../actions/stock_action';
import NewsArticle from './new_article';
import TransactionForm from './transaction_form';
import TickerNav from './ticker-nav';
import Chart from './chart';


const TickerShow = (props) => {
  const news = useSelector(state => state.entities.news);
  const historical = useSelector(state => state.entities.historical);
  const price = useSelector(state => state.entities.price);
  const profile = useSelector(state => state.entities.profile);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getStock({ticker: props.match.params.sym}));
    if (news.length !== 0) return;
  }, [props.match.params.sym])

  if (historical["1d"] === undefined || price === null) return null;

  return (
    <div className="ticker-show-container">
      <TickerNav />
      <div className="ticker-data">
        <Chart 
          historical={historical} 
          companyName={profile["companyName"]} 
          stockPrice={price}
        />

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