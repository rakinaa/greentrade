import React, { useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getNews } from '../../actions/news_actions';
import { getStock } from '../../actions/stock_action';
import NewsArticle from './new_article';
import TransactionForm from './transaction_form';
import TickerNav from './ticker-nav';
import Chart from './chart';
import { startNewsLoading, startStockLoading } from '../../actions/loading_actions';


const TickerShow = (props) => {
  const news = useSelector(state => state.entities.news);
  const historical = useSelector(state => state.entities.historical);
  const price = useSelector(state => state.entities.price);
  const profile = useSelector(state => state.entities.profile);
  const stockLoading = useSelector(state => state.ui.loading.stock)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(startNewsLoading());
    dispatch(startStockLoading());
    dispatch(getStock({ticker: props.match.params.sym}));
    if (news.length !== 0) return;
  }, [props.match.params.sym])

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