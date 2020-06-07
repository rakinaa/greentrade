import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";

const NewsContent = (props) => {
  return (
    <div>
      <div className="news-commissions">
        <h3 className="comm-heading">
          Break Free from Commission Fees
        </h3>
        <p className="comm-body">
          Make unlimited commission-free trades in stocks, ETFs, and options with Greentrade Financial, as well as buy and sell cryptocurrencies with Greentrade Crypto. See our fee schedule to learn more about cost.
        </p>
        <Link className="link-info" to='/'>
          <FontAwesomeIcon className="info-icon" icon={faInfoCircle} />
          <p>Commissions Disclosure</p>
        </Link>
      </div>
      <hr className="news-hr"/>
      <div className="news-fractional">
        <div className="frac-content">
          <h3 className="frac-heading">
            Introducing Fractional Shares
          </h3>
          <p className="frac-caption">
            Invest in thousands of stocks with as little as $1.
          </p>
          <div className="frac-body">
            <div className="frac-sub-content">
              <h3 className="frac-sub-heading">
                Invest Any Amount
              </h3>
              <p className="frac-sub-body">
                Choose how much you want to invest, and we’ll convert from dollars to parts of a whole share.
              </p>
            </div>
            <div className="frac-sub-content">
              <h3 className="frac-sub-heading">
                Build a Balanced Portfolio
              </h3>
              <p className="frac-sub-body">
                Customize your portfolio with pieces of different companies and funds to help reduce risk.
              </p>
            </div>
            <div className="frac-sub-content">
              <h3 className="frac-sub-heading">
                Trade in Real Time
              </h3>
              <p className="frac-sub-body">
                Trades placed during market hours are executed at that time, so you’ll always know the share price.
              </p>
            </div>
          </div>
          <div className="frac-access">
            <input type="text" placeholder="name@email.com" />
            <button className="green-button">Get Early Access</button>
          </div>
          <Link className="link-info" to='/'>
            <FontAwesomeIcon className="info-icon" icon={faInfoCircle} />
            <p>Fractional Shares Disclosure</p>
          </Link>
        </div>
        <img src={window.partial_shares_png} alt="fractional shares"/>
      </div>
    </div>
  )
}

export default NewsContent;