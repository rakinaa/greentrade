import React from 'react';

const Carousel = (props) => {
  return (
    <div className="carousel-container">
      <div className="carousel-controls">
        <p className="control">
          Learn
        </p>
        <p className="control">
          Manage
        </p>
        <p className="control">
          Customize
        </p>
      </div>
      <div className="slides">
        <div className="slide">
          <img src={window.learn_png} alt="learn" />
          <div className="slide-text">
            <h3 className="slide-heading">
              Learn As You Grow
            </h3>
            <p className="slide-body">
              Our goal is to make investing in financial markets more affordable, more intuitive, and more fun, no matter how much experience you have (or don’t have).
            </p>
          </div>
        </div>
        <div className="slide hidden">
          <img src={window.manage_png} alt="manage" />
          <div className="slide-text">
            <h3 className="slide-heading">
              Manage Your Portfolio
            </h3>
            <p className="slide-body">
              Keep your portfolio in your pocket. Everything you need to manage your assets is available in a single app.
            </p>
          </div>
        </div>
        <div className="slide hidden">
          <img src={window.customize_png} alt="learn" />
          <div className="slide-text">
            <h3 className="slide-heading">
              Keep Tabs on Your Money
            </h3>
            <p className="slide-body">
              Set up customized news and notifications to stay on top of your assets as casually or as relentlessly as you like. Controlling the flow of info is up to you.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Carousel;