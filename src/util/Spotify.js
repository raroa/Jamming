const clientID = '8bcaf185467648fb8f7ec1ca4d479f5f';
const redirectURI= 'http://localhost:3000/';
let accessToken = '';

const Spotify = {
    getAccessToken() {
        if(accessToken != null) {
            return accessToken;
        } 
         else if() { // did not know what to put for the second condition
            window.setTimeout(() => accessToken = '', expiresIn * 1000);
            window.history.pushState('Access Token', null, '/');
         } else if(accessToken == null && ) { // did not know what had to write after &&
             window.location(`https://accounts.spotify.com/authorize?client_id=${clientID}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectURI}`)
         }
    },

    search(searchTerm) {
        return fetch(`https://api.spotify.com/v1/search?type=track&q=searchTerm`, {
            headers: {Authorisation: `Bearer ${accessToken}`}
        }).then(response => {return response.json()}).then(jsonResponse => {
            if(jsonResponse.tracks) {
                return jsonResponse.tracks.map(
                    track => (
                        {
                          ID: track.id,
                          Name: track.name,
                          Artist: track.artists[0].name,
                          Album: track.album.name,
                          URI: track.uri
                        }
                    )
                )
            }
        })
    },

    savePlaylist(playlistName, trackURIs) {
        if(playlistName == null || trackURIs == null ) {
            return
        } else {
            const TokenAccess = '2b8d67d7f9af4daca30c5f76b58da968';
            const headers =  {headers: {
                'Authorization': 'Bearer ' + TokenAccess
            }};
            const userID = '';

            return fetch(`https://api.spotify.com/v1/me`, {headers: headers}).then(
                response => {return response.json}
            ).fetch(
                `https://api.spotify.com/v1/users/${userID}/playlists`, {headers: headers, method: 'POST', body: JSON.stringify({id: '200'})}
            ).then(response => {
                let playlistID = response.json();
            })
        }
    }
}

export default Spotify;