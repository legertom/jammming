import React from 'react';
import './UserProfile.css';

function UserProfile ({userInfo}) {
    if(!userInfo) {
        return null;
    }

    return (
        <div className="user-profile">
            <img className="profile-image" src={userInfo.image} alt={userInfo.name} />
            <p className="profile-name">{userInfo.name}</p>
            <p className="profile-followers">{userInfo.followers} Followers</p>
            <a className="profile-link" href={userInfo.profileUrl} target="_blank" rel="noopener noreferrer">View Profile</a>
        </div>
    )


}

export default UserProfile;