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

  return (
    <div className="playlist">
     
      {isEditing? (
        <>
         <input value={inputValue} onChange={handleNameChange} />
         <button onClick={handleNameSave} className="playlist-save">
        SAVE NAME
      </button>
        </> 
      ) : (
        <>
        <h2 className="playlist-name">{playlistName}</h2>
        <button onClick={() => setIsEditing(true)} className="playlist-edit">
        EDIT NAME</button>
        </>
      )}
      
        <button onClick={savePlaylist} className="playlist-save">Save Playlist to Spotify</button>

      <Tracklist tracks={tracks} onRemove={onRemove} action="remove" />
    </div>
  );
}

export default Playlist;
