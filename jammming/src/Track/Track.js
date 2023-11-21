import React from 'react';
import './Track.css';


function Track({ track, action, onAdd, onRemove }) {
    const handleAdd = () => {
        onAdd(track);
    }

    const handleRemove = () => {
        onRemove(track);
    }

    return (
        <div className="track">
            <div className="track-information">
                <h3>{track.name}</h3>
                <p>{track.artist} | {track.album}</p>
            </div>
            <button onClick={action === 'add' ? handleAdd : handleRemove} className="track-action">{action === 'add' ? '+' : '-'}</button>
        </div>
    )
}

export default Track;