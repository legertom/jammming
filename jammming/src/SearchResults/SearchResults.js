import React from 'react';
import './SearchResults.css';
import Tracklist from '../Tracklist/Tracklist';


function SearchResults({ searchResults }) {
    if(searchResults.length !== 0) {
    console.log(`in SearchResults.js searchResults: ${searchResults.length}`);
    }
    return (
        <div>
          <Tracklist tracks={searchResults} />
        </div>
      );

}

export default SearchResults;