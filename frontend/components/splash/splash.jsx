import React from 'react';
import NavBarContainer from '../navbar/navbar_container';
import Jumbotron from './jumbotron';
import NewsContent from './news_content';
import Carousel from './carousel';
import Sponsors from './sponsors';
import Footer from './footer';

const Splash = (props) => {
  return (
    <div>
      <NavBarContainer />
      <Jumbotron />
      <NewsContent />
      <Carousel />
      <Sponsors />
      <Footer />
    </div>
  )
}

export default Splash;