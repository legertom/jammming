import './App.css';
import SearchBar from './SearchBar/SearchBar';
import SearchResults from './SearchResults/SearchResults';
import Playlist from './Playlist/Playlist';
import sampleData from './data/data';
import React, { useState } from 'react';

function App() {
  const [searchResults, setSearchResults] = useState([]); // set the initial state of searchResults to an empty array

  const handleSearch = (term) => {
    const results = sampleData.filter(track => track.name.toLowerCase().includes(term.toLowerCase()) || track.artist.toLowerCase().includes(term.toLowerCase()) || track.album.toLowerCase().includes(term.toLowerCase()));
    setSearchResults(results);
    console.log(`in App.js results: ${results} --list is (${results.length} item long)`);
  }

  return (
    <div className="App">
      <h1>Ja<span className="highlight">mmm</span>ing</h1>
      <SearchBar onSearch={handleSearch} />
      <SearchResults searchResults={searchResults} />
      <Playlist />
    </div>
  );
}

export default App;
