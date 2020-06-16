import React, { useCallback, useState, useEffect } from "react";
import TickerSearch from "./ticker_search";

const TickerNav = (props) => {
  const [theme, setTheme] = useState("Light");

  useEffect(() => {
    switchTheme();
  }, []);

  const switchTheme = useCallback(() => {
    if (theme == "Dark") {
      document.documentElement.style.setProperty("--main-bg", "#202123");
      document.documentElement.style.setProperty("--text-color", "white");
      document.documentElement.style.setProperty("--input-bg", "#083427");
      setTheme("Light");
    } else {
      document.documentElement.style.setProperty("--main-bg", "white");
      document.documentElement.style.setProperty("--text-color", "black");
      document.documentElement.style.setProperty("--input-bg", "#dbf9f0");
      setTheme("Dark");
    }
  });

  return (
    <nav className="nav-main tick-nav">
      <div className="nav-left">
        <p className="nav-logo" to="/">
          Greentrade
        </p>
        <img className="nav-img" src={window.logo_png} alt="logo" />
      </div>
      <TickerSearch />
      <div className="nav-right">
        <nav className="nav-auth">
          <p onClick={switchTheme} className="nav-theme">
            {theme} Mode
          </p>
          <p className="nav-logout">Log Out</p>
        </nav>
      </div>
    </nav>
  );
};

export default TickerNav;
