import React from 'react';
import Track from '../Track/Track';
import sampleData from '../data/data';

//You will add a map method that renders a set of Track components  (one component per track object).
function Tracklist({tracks, action, onAdd, onRemove}) {

    return (
        <div className="TrackList">
           {tracks.map(track => {
                return <Track track={track} key={track.id} action={action} onAdd={onAdd} onRemove={onRemove} />
           })}
        </div>
    )
}

export default Tracklist;