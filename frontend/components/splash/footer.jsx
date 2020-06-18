import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faAngellist,
} from "@fortawesome/free-brands-svg-icons";

const col1 = ["Stocks & Funds", "Options", "Gold", "Cash Management"];
const col2 = ["Learn", "Support", "Snacks"];
const col3 = ["About Us", "Careers", "Company News"];

const Footer = (props) => {
  return (
    <div className="footer">
      <div className="cols-container">
        <div className="col">
          {col1.map((text) => (
            <p className="footer-link">{text}</p>
          ))}
        </div>
        <div className="col">
          {col2.map((text) => (
            <p className="footer-link">{text}</p>
          ))}
        </div>
        <div className="col">
          {col3.map((text) => (
            <p className="footer-link">{text}</p>
          ))}
        </div>
      </div>
      <div className="dev-links">
        <a href=""></a>
        <FontAwesomeIcon className="dev-link" icon={faGithub} />
        <FontAwesomeIcon className="dev-link" icon={faLinkedin} />
        <FontAwesomeIcon className="dev-link" icon={faAngellist} />
      </div>
    </div>
  );
};

export default Footer;
