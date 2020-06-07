import React from 'react';
import Jumbotron from './jumbotron';
import NewsContent from './news_content';

const Splash = (props) => {
  return (
    <div>
      <Jumbotron />
      <NewsContent />
    </div>
  )
}

export default Splash;