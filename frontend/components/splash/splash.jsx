import React from 'react';
import Jumbotron from './jumbotron';
import NewsContent from './news_content';
import Carousel from './carousel';
import Sponsors from './sponsors';

const Splash = (props) => {
  return (
    <div>
      <Jumbotron />
      <NewsContent />
      <Carousel />
      <Sponsors />
    </div>
  )
}

export default Splash;