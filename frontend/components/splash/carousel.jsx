import React, { useState, useEffect } from 'react';

const Carousel = (props) => {
  const [cls, setCls] = useState(['fade-in', 'hidden', 'hidden'])
  const [ctrl, setCtrl] = useState(['ctrl-active', 'ctrl-inactive', 'ctrl-inactive'])
  const [currSlide, setCurrSlide] = useState(0);

  // useEffect(() => {
  //   const slide = document.getElementsByClassName('slide')[0];
  //   slide.addEventListener("transitionend", function() {
  //     console.log('transistioned');
  //   }.bind(slide))
  // })


  const handleClick = (i) => {
    return () => {
      if (i !== currSlide) {
        setCls(cls => {
          const newCls = [...cls];
          newCls[i] = "fade-in";
          newCls[currSlide] = "fade-out";

          setTimeout(() => {
            setCls(cls => {
              const updateCls = [...cls];
              updateCls[currSlide] = "hidden";
              if (updateCls[i] !== 'fade-in') {
                updateCls[i] = "fade-in";
              }
              return updateCls;
            })
          }, 1000);

          return newCls;
        })

        setCurrSlide(i);

        setCtrl(ctrl => {
          const newCtrl = [...ctrl];
          newCtrl[i] = "ctrl-active";
          newCtrl[currSlide] = "ctrl-inactive";
          return newCtrl;
        })
      }
    }
  }

  return (
    <div className="carousel-container">
      <div className="carousel-controls">
        <p onClick={handleClick(0)} className={`${ctrl[0]}`}>
          Learn
        </p>
        <p onClick={handleClick(1)} className={`${ctrl[1]}`}>
          Manage
        </p>
        <p onClick={handleClick(2)} className={`${ctrl[2]}`}>
          Customize
        </p>
      </div>
      <div className="slides">
        <div className={`slide ${cls[0]}`}>
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
        <div className={`slide ${cls[1]}`}>
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
        <div className={`slide ${cls[2]}`}>
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