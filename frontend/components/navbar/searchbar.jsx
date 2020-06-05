import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";


const SearhBar = (props) => {
  return (
    <div className="search-container">
        <input className="nav-searchbar" type="text" placeholder="Photos, people, or groups" />
        <FontAwesomeIcon className="nav-search-icon" icon={faSearch} />
    </div>
  )
}

export default SearhBar;