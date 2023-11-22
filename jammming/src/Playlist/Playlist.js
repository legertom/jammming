import React, { useState } from "react";
import "./Playlist.css";
import Tracklist from "../Tracklist/Tracklist";

function Playlist({ tracks, onRemove, playlistName, onNameChange, savePlaylist }) {
  const [inputValue, setInputValue] = useState(playlistName);
  const [isEditing, setIsEditing] = useState(false);

  const handleNameChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleNameSave = () => {
    onNameChange(inputValue);
    setIsEditing(false);
  };

  const handleNameClick = () => {
    setIsEditing(true);
  }

  const handleInputChange= (e) => {
    setInputValue(e.target.value);
  }

  const handleInputBlur = () => {
    onNameChange(inputValue);
    setIsEditing(false);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      onNameChange(inputValue);
      setIsEditing(false);
    }
  }

  return (
    <div className="playlist">

      {isEditing ? (
        <input
          className="playlist-name"
          value={inputValue}
          onChange={handleInputChange}
          onBlur={handleInputBlur}
          onKeyPress={handleKeyPress}
          autoFocus
        />
      ) : (
        <h2 className="playlist-name" onClick={handleNameClick}>
          {playlistName}
        </h2>
      
      )}
     
      {/* {isEditing? (
        <>
         <input value={inputValue} onChange={handleNameChange} />
         <button onClick={handleNameSave} className="playlist-save">
        save
      </button>
        </> 
      ) : (
        <>
        <h2 className="playlist-name">{playlistName}</h2>
        <button onClick={() => setIsEditing(true)} className="playlist-edit">
        Edit playlist name</button>
        </>
      )} */}
      
        <button onClick={savePlaylist} className="playlist-save">Save Playlist to Spotify</button>

      <Tracklist tracks={tracks} onRemove={onRemove} action="remove" />
    </div>
  );
}

export default Playlist;
