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
        <a href="https://github.com/rakinaa" target="_blank">
          <FontAwesomeIcon className="dev-link" icon={faGithub} />
        </a>
        <a
          href="https://www.linkedin.com/in/rakin-rouf-6607b21a4/"
          target="_blank"
        >
          <FontAwesomeIcon className="dev-link" icon={faLinkedin} />
        </a>
        <a href="https://angel.co/u/rakin-rouf" target="_blank">
          <FontAwesomeIcon className="dev-link" icon={faAngellist} />
        </a>
      </div>
    </div>
  );
};

export default Footer;
