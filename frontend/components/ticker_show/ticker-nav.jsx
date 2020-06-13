import React from 'react';
import { Link } from 'react-router-dom';

const TickerNav = (props) => {
  return (
    <nav className="nav-main tick-nav">
      <div className="nav-left">
        <p className="nav-logo" to="/">Greentrade</p>
        <img className="nav-img" src={window.logo_png} alt="logo"/>
      </div>
      <div className="nav-right">
        <nav className="nav-auth">
          <p className="nav-theme">Light Mode</p>
          <p className="nav-logout">Log Out</p>
        </nav>
      </div>
    </nav>
  )
}

export default TickerNav;