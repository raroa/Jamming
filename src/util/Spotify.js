const clientID = '8bcaf185467648fb8f7ec1ca4d479f5f';
const redirectURI= 'http://localhost:3000/';
const accessToken = '';
let Sportify = {
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
    }
}

module.exports = Sportify;