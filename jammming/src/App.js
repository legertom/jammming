import "./App.css";
import SearchBar from "./SearchBar/SearchBar";
import SearchResults from "./SearchResults/SearchResults";
import Playlist from "./Playlist/Playlist";
import sampleData from "./data/data";
import React, { useState } from "react";

function App() {
  const [searchResults, setSearchResults] = useState([]); // set the initial state of searchResults to an empty array
  const [playlistName, setPlaylistName] = useState("New Playlist");
  const [playlistTracks, setPlaylistTracks] = useState([]);

  const handleSearch = (term) => {
    const results = sampleData.filter(
      (track) =>
        track.name.toLowerCase().includes(term.toLowerCase()) ||
        track.artist.toLowerCase().includes(term.toLowerCase()) ||
        track.album.toLowerCase().includes(term.toLowerCase())
    );
    setSearchResults(results);
    console.log(
      `in App.js results: ${results} --list is (${results.length} item long)`
    );
  };

  const addTrack = (track) => {
    setPlaylistTracks([...playlistTracks, track]);
  };

  const removeTrack = (track) => {
    setPlaylistTracks(playlistTracks.filter((item) => item.id !== track.id));
  };

  const changePlaylistName = (name) => {
    setPlaylistName(name);
  };

  const savePlaylist = () => {
    const trackUris = playlistTracks.map((track) => track.uri);
    console.log(trackUris);
  }

  return (
    <div className="App">
      <h1>
        Ja<span className="highlight">mmm</span>ing
      </h1>
      <div>
        <div id="search-bar">
          <SearchBar onSearch={handleSearch} />
        </div>
        <div id="lower-section">
          <div id="search-results">
            <SearchResults searchResults={searchResults} onAdd={addTrack} />
          </div>
          <div id="playlist">
            <Playlist
              playlistName={playlistName}
              onNameChange={changePlaylistName}
              tracks={playlistTracks}
              onRemove={removeTrack}
              savePlaylist={savePlaylist}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
