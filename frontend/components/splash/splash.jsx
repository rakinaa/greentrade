import React from 'react';
import Jumbotron from './jumbotron';
import NewsContent from './news_content';
import Carousel from './carousel';

const Splash = (props) => {
  return (
    <div>
      <Jumbotron />
      <NewsContent />
      <Carousel />
    </div>
  )
}

export default Splash;