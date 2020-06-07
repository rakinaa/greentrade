import React from 'react';
import { Link } from 'react-router-dom';
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