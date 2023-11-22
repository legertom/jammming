import "./App.css";
import SearchBar from "./SearchBar/SearchBar";
import SearchResults from "./SearchResults/SearchResults";
import Playlist from "./Playlist/Playlist";

import React, { useState, useEffect } from "react";
import Spotify from "./Spotify";

const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
const REDIRECT_URI = process.env.REACT_APP_SPOTIFY_REDIRECT_URI;
const SCOPES = ["playlist-modify-public", "user-read-private"];

function App() {
  const [searchResults, setSearchResults] = useState([]); // set the initial state of searchResults to an empty array
  const [playlistName, setPlaylistName] = useState("New Playlist");
  const [playlistTracks, setPlaylistTracks] = useState([]);
  const [token, setToken] = useState(null);

  const handleLogin = () => {
    window.location = `https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&redirect_uri=${encodeURIComponent(
      REDIRECT_URI
    )}&scope=${encodeURIComponent(
      SCOPES.join(" ")
    )}&response_type=token&show_dialog=true`;
  };

  useEffect(() => {
    if (window.location.hash) {
      const hash = window.location.hash.substring(1);
      const params = new URLSearchParams(hash);
      const accessToken = params.get("access_token");
      if (accessToken) {
        setToken(accessToken);
        window.location.hash = "";
      }
    }
  }, []);

  const handleSearch = (term) => {
    Spotify.search(term, token).then((searchResults) => {
      setSearchResults(searchResults);
    });
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
    if (!playlistName || !playlistTracks.length) {
      return;
    }
    const trackUris = playlistTracks.map((track) => track.uri);

    Spotify.createPlaylist(token, playlistName)
      .then((playlistId) => {
        return Spotify.addTracksToPlaylist(token, playlistId, trackUris);
      })
      .then(() => {
        setPlaylistName("New Playlist");
        setPlaylistTracks([]);
      })
      .catch((error) => {
        console.log("Error saving playlist: ", error);
      });
  };

  return (
    <div className="App">
      <h1>
        Ja<span className="highlight">mmm</span>ing
      </h1>
      <div>
        <div>
          {!token && <button onClick={handleLogin}>Login to Spotify</button>}
        </div>
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
