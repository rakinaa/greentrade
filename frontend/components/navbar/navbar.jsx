import React from "react";
import { Link } from "react-router-dom";
import GreetingContainer from "./greeting/greeting_container";

const NavBar = (props) => {
  return (
    <nav className="nav-main">
      <div className="nav-left">
        <p className="nav-logo" to="/">
          Greentrade
        </p>
        <img className="nav-img" src={window.logo_png} alt="logo" />
        <Link className="nav-home link-grey" to="/">
          Learn
        </Link>
        <Link className="nav-home link-grey" to="/">
          Support
        </Link>
      </div>
      <div className="nav-right">
        <GreetingContainer />
      </div>
    </nav>
  );
};

export default NavBar;
