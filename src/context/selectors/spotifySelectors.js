import useAppContext from "../context";

//SPOTIFY SELECTORS
export const getSpotifyUserId = (state) => state.spotify.user.id;
export const getSpotifyUserStatus = (state) => state.spotify.user.status;
export const getSpotifyPlaylists = (state) => state.spotify.playlists.items;
export const getSpotifyPlaylistsStatus = (state) => state.spotify.playlists.status;
export const getSpotifySelectedPlaylistId = (state) => state.spotify.selectedPlaylist.id;
export const getSpotifySelectedPlaylistTracks = (state) => state.spotify.selectedPlaylist.tracks;
export const getSpotifySelectedPlaylistStatus = (state) => state.spotify.selectedPlaylist.status;

export const useSpotifySelectors = () => {
    const { state } = useAppContext()

    const userId = getSpotifyUserId(state);
    const userStatus = getSpotifyUserStatus(state);
    const playlists = getSpotifyPlaylists(state);
    const playlistsStatus = getSpotifyPlaylistsStatus(state);
    const selectedPlaylistId = getSpotifySelectedPlaylistId(state);
    const selectedPlaylistTracks = getSpotifySelectedPlaylistTracks(state);
    const selectedPlaylistStatus = getSpotifySelectedPlaylistStatus(state);

    return { userId, userStatus, playlists, playlistsStatus, selectedPlaylistId, selectedPlaylistTracks, selectedPlaylistStatus }
}
