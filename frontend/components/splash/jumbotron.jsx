import React from 'react';
import { Link } from 'react-router-dom';

const Jumbotron = (props) => {
  return (
    <div className="jumbotron">
      <div className="welcome">
        <h3 className="welcome-heading">
          Investing for Everyone
        </h3>
        <p className="welcome-body">
          Greentrade, a pioneer of commission-free investing, gives you more ways to make your money work harder.
        </p>
      </div>

    </div>
  )
}

export default Jumbotron;