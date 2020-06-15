import React, { useCallback, useState } from 'react';
import stocks from '../../util/all_stocks';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';

const getCompanies = (searchStr) => {
  if (searchStr === "") return [];
  searchStr = searchStr.toUpperCase();
  
  const resultsArr = [];
  for (let i = 0; i < stocks.length; i++) {
    const names = stocks[i];
    if (names[0].toUpperCase().includes(searchStr) || names[1].toUpperCase().includes(searchStr)) {
      resultsArr.push(names);
    }
    if (resultsArr.length > 6) return resultsArr;
  }
  return resultsArr;
};

const TickerSearch = (props) => {
  const [searchInput, setSearch] = useState("");

  const update = useCallback((e) => {
    setSearch(e.currentTarget.value);
  });

  const hideResults = useCallback(() => {
    setTimeout(() => {
      document.getElementById('results').style.display='none';
    }, 100);
  })

  const showResults = useCallback(() => {
    document.getElementById('results').style.display='block';
  })

  return (
    <form className="search-container">
      <input 
        onBlur={hideResults}
        onFocus={showResults}
        onChange={update}
        className="nav-searchbar" 
        type="text" 
        placeholder="Search" 
        value={searchInput} 
      />

      <FontAwesomeIcon className="nav-search-icon" icon={faSearch} />

      <div className="results-container" id="results">
        {getCompanies(searchInput).map((company) => (
          <Link key={company[0]} className="search-result" to={`/show/${company[0]}`}>
            <p className="res-symbol">{company[0]}</p>
            <p className="res-full">{company[1]}</p>
          </Link>
        ))}
      </div>
    </form>
  )
}

export default TickerSearch;