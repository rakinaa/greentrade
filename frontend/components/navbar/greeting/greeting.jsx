import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudUploadAlt } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Greeting = ({ currentUser, logout, openModal }) => {
  const sessionLinks = () => (
    <nav className="nav-auth">
      <Link to="/login" className="nav-login link-black">
        Sign In
      </Link>
      <Link to="/signup" className="nav-signup green-button">
        Sign Up
      </Link>
    </nav>
  );

  return sessionLinks();
};

export default Greeting;
