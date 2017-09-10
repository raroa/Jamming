const accessToken = '';
let Sportify = {
    getAccessToken() {
        if(accessToken != null) {
            return accessToken;
        }
         else if() {
            window.setTimeout(() => accessToken = '', expiresIn * 1000);
            window.history.pushState('Access Token', null, '/');
         }
    }
}

module.exports = Sportify;