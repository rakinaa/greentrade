import React, { useCallback } from 'react';


const NewsArticle = (props) => {
  const { imageUrl, title, source, summary } = props;
  return (
    <div className="news-article">
      <img className="article-image" src={imageUrl} />
      <div className="article-text">
        <h3 className="article-title">{title}</h3>
        <p className="article-source">{source}</p>
        <p className="article-body">{summary}</p>
      </div>
    </div>
  )
}

export default NewsArticle;