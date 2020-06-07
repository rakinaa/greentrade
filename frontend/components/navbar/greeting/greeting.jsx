import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudUploadAlt } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';

const Greeting = ({ currentUser, logout, openModal }) => {

  const sessionLinks = () => (
    <nav className="nav-auth">
      <a className="nav-login link-black" onClick={() => openModal('login')}>Sign In</a>
      <a className="nav-signup green-button" onClick={() => openModal('signup')}>Sign Up</a>
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