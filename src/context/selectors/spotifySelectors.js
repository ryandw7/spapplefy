import useAppContext from "../context";

//SPOTIFY SELECTORS
export const getSpotifyUserId = (state) => state.spotify.user.id;
export const getSpotifyUserStatus = (state) => state.spotify.user.status;
export const getSpotifyPlaylists = (state) => state.spotify.playlists.items;
export const getSpotifyPlaylistsStatus = (state) => state.spotify.playlists.status;


export const useSpotifySelectors = () => {
    const { state } = useAppContext()

    const spotifyId = getSpotifyUserId(state);
    const spotifyUserStatus = getSpotifyUserStatus(state);
    const spotifyPlaylists = getSpotifyPlaylists(state);
    const playlistsStatus = getSpotifyPlaylistsStatus(state);


    return { spotifyId, spotifyUserStatus, spotifyPlaylists, playlistsStatus }
}
