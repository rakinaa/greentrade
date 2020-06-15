import React, { useEffect } from "react";
import CircleLoader from "react-spinners/CircleLoader";
import { useSelector, useDispatch } from "react-redux";
import { getNews } from "../../actions/news_actions";
import { getStock } from "../../actions/stock_action";
import { startNewsLoad, startStockLoad } from "../../actions/loading_actions";
import NewsArticle from "./new_article";
import TransactionForm from "./transaction_form";
import TickerNav from "./ticker-nav";
import Chart from "./chart";

const TickerShow = (props) => {
  const news = useSelector((state) => state.entities.news);
  const historical = useSelector((state) => state.entities.historical);
  const price = useSelector((state) => state.entities.price);
  const profile = useSelector((state) => state.entities.profile);
  const stockLoading = useSelector((state) => state.ui.loading.stock);
  const newsLoading = useSelector((state) => state.ui.loading.news);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(startStockLoad());
    dispatch(getStock({ ticker: props.match.params.sym }));
    if (news.length !== 0) return;
    dispatch(startNewsLoad());
    dispatch(getNews());
  }, [props.match.params.sym]);

  return (
    <div className="ticker-show-container">
      <TickerNav />

      <div className="ticker-data">
        {!stockLoading ? (
          <Chart
            historical={historical}
            companyName={profile["companyName"]}
            stockPrice={price}
          />
        ) : (
          <CircleLoader size={400} color={"#21ce99"} />
        )}

        {!newsLoading && !stockLoading ? (
          <div className="news-feed">
            <h2 className="news-header">Today's Top Stories</h2>
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
        ) : null}
      </div>

      {!stockLoading ? (
        <TransactionForm
          tickerSymbol={props.match.params.sym}
          stockPrice={price}
        />
      ) : null}
    </div>
  );
};

export default TickerShow;
