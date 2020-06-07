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
      <div className="news-fractional">

      </div>
    </div>
  )
}

export default NewsContent;