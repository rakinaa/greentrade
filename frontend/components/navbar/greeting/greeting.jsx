import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudUploadAlt } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';

const Greeting = ({ currentUser, logout, openModal }) => {

  const sessionLinks = () => (
    <nav className="nav-auth">
      <Link to='/login' className="nav-login link-black">Sign In</Link>
      <Link to='/login' className="nav-signup green-button">Sign Up</Link>
    </nav>
  );
  const personalGreeting = () => (
    <nav className="nav-auth">
      <Link to='/photos/new'>
        <FontAwesomeIcon className="cloud-icon" icon={faCloudUploadAlt} />
      </Link>
      <button className="blue-button" onClick={logout}>Log Out</button>
    </nav>
  );

  return (
    currentUser ?
    personalGreeting(logout) :
    sessionLinks()
  );
};

export default Greeting;