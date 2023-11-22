const Spotify = {
  search(term, accessToken) {
    return fetch(`https://api.spotify.com/v1/search?type=track&q=${term}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((jsonResponse) => {
        if (!jsonResponse.tracks) {
          return [];
        }
        return jsonResponse.tracks.items.map((track) => ({
          id: track.id,
          name: track.name,
          artist: track.artists[0].name,
          album: track.album.name,
          uri: track.uri,
        }));
      });
  },
  getUserId(accessToken) {
    return fetch(`https://api.spotify.com/v1/me`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((jsonResponse) => {
        return jsonResponse.id;
      });
  },
  getUserInfo(accessToken) {
    return fetch('https://api.spotify.com/v1/me', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((jsonResponse) => {
        return {
          name: jsonResponse.display_name,
          followers: jsonResponse.followers.total,
          image: jsonResponse.images[0].url,
          profileUrl: jsonResponse.external_urls.spotify,
        };
      }); 
  },

  createPlaylist(accessToken, playlistName) {
    return fetch("https://api.spotify.com/v1/me/", {
      headers: { Authorization: `Bearer ${accessToken}` },
    })
      .then((response) => response.json())
      .then((jsonResponse) => {
        const userId = jsonResponse.id;
        return fetch(`https://api.spotify.com/v1/users/${userId}/playlists`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "application/json",
          },
          method: "POST",
          body: JSON.stringify({ name: playlistName }),
        });
      })
      .then((response) => response.json())
      .then((jsonResponse) => jsonResponse.id);
  },
  addTracksToPlaylist(accessToken, playlistId, trackUris) {
    return fetch(`https://api.spotify.com/v1/playlists/${playlistId}/tracks`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({ uris: trackUris }),
    });
  },
};

export default Spotify;
