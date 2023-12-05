import React from 'react';
import { GetAllUsers } from '../DatabaseFacade';
import SearchResult from './SearchResult';
import Navbar from './Navbar';
import "./AvailableDrivers.css";

const AvailableDrivers = () => {
    const [results] = GetAllUsers("Computer Science")
    return (
      <div className="available-drivers">
        <h2>Search Results:</h2>
        {results ? (
          <div className="search-results">
            {results.docs.map((obj, index) => (
              <div key={index}>
                <SearchResult userInformation={obj.data()} />
              </div>
            ))}
          </div>
        ) : (
          <div>loading...</div>
        )}
        <Navbar />
      </div>
    );
};

export default AvailableDrivers;
