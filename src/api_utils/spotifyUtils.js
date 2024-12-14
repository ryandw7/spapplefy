import { SPOTIFY_CLIENT_ID, SPOTIFY_REDIRECT_URI } from "../globals";
//Return url to generate access token with spotify
export const spotifyAuthFlow = () => {
    const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
    const RESPONSE_TYPE = "token";
    const SCOPE = 'playlist-modify-public playlist-modify-private'
    let url = '';
    url += AUTH_ENDPOINT;
    url += '?client_id=' + SPOTIFY_CLIENT_ID;
    url += '&redirect_uri=' + SPOTIFY_REDIRECT_URI;
    url += '&response_type=' + RESPONSE_TYPE;
    url += '&scope=' + SCOPE;
    return url;
}

//hash access token from url after authFlow has successfully been completed
export const hashSpotifyToken = () => {

    const hash = window.location.hash;
    let accessToken = window.sessionStorage.getItem("token");
    if (!accessToken && hash) {
        accessToken = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1];
        window.location.hash = "";
        window.sessionStorage.setItem("spotify_token", accessToken);
        window.sessionStorage.setItem("authorized", true);

    }
}

//Return data from fetching user info after access token has been retrieved


export const retrieveSpotifyUser = async () => {

    try {
        const res = await fetch('https://api.spotify.com/v1/me?access_token=' + window.sessionStorage.getItem("spotify_token"))
        const data = await res.json();
        return data;
    } catch (err) {
        console.log(`ERROR: ${err}, Unable to retrieve ID`);
    }
}

export const getSpotifyPlaylists = async (userId, token) => {
    console.log(token)
    const res = await fetch(`https://api.spotify.com/v1/users/${userId}/playlists`, {
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-type": "application/json; charset=UTF-8"
        }
    });
    const data = await res.json()
    console.log(data)
}