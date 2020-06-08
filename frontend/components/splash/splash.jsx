import React from 'react';
import Jumbotron from './jumbotron';
import NewsContent from './news_content';
import Carousel from './carousel';
import Sponsors from './sponsors';
import Footer from './footer';

const Splash = (props) => {
  return (
    <div>
      <Jumbotron />
      <NewsContent />
      <Carousel />
      <Sponsors />
      <Footer />
    </div>
  )
}

export default Splash;