import React from 'react';
import './Track.css';


function Track({ track }) {
    return (
        <div className="track">
            <div className="track-information">
                <h3>{track.name}</h3>
                <p>{track.artist} | {track.album}</p>
            </div>
            <button className="track-action">+</button>
        </div>
    )
}

export default Track;