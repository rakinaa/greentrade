import React from "react";
import { Link } from "react-router-dom";

const Jumbotron = (props) => {
  return (
    <div className="jumbotron">
      <div className="welcome">
        <h3 className="welcome-heading">Investing for Everyone</h3>
        <p className="welcome-body">
          Greentrade, a pioneer of commission-free investing, gives you more
          ways to make your money work harder.
        </p>
        <Link to="/signup" className="welcome-button">
          Sign Up
        </Link>
      </div>
      <div className="jumbo-phone">
        <video autoPlay loop muted preload="auto" className="phone-vid">
          <source
            className="phone-mp4"
            src={window.iphone_mp4}
            type="video/mp4"
          />
        </video>
        <img className="phone-img" src={window.iphone_splash_png} />
      </div>
    </div>
  );
};

export default Jumbotron;
