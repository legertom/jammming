import React from 'react';
import './SearchResults.css';
import Tracklist from '../Tracklist/Tracklist';


function SearchResults({ searchResults, onAdd }) {
    if(searchResults.length !== 0) {
    console.log(`in SearchResults.js searchResults: ${searchResults.length}`);
    }



    return (
        <div>
          <Tracklist tracks={searchResults} onAdd={onAdd} action="add"/>
        </div>
      );

}

export default SearchResults;