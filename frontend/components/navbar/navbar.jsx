import React from 'react';
import { Link } from 'react-router-dom';
import GreetingContainer from './greeting/greeting_container';
import SearhBar from './searchbar';

const NavBar = (props) => {
  return (
    <nav className="nav-main">
      <div className="constrainer">
        <div className="nav-left">
          <Link className="nav-logo link-white" to="/">Pictr</Link>
          <Link className="nav-home link-white" to="/photos">All Photos</Link>
          {props.currentUser ? <Link className="nav-home link-white" to={`/users/${props.currentUser.id}/photos`}>Home</Link> : null}
        </div>
        <div className="nav-right">
          <SearhBar />
          <GreetingContainer />
        </div>
      </div>
    </nav>
  )
}

export default NavBar;