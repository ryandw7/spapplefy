import useAppContext from "./context";

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

//APPLE SELECTORS

export const getAppleUserId = (state) => state.apple.user.id;
export const getAppleUserStatus = (state) => state.apple.user.status;
export const getApplePlaylists = (state) => state.apple.playlists.items;
export const getApplePlaylistsStatus = (state) => state.apple.playlists.status;
export const getAppleSelectedPlaylist = (state) => state.apple.playlists
export const getAppleSelectedPlaylistId = (state) => state.apple.selectedPlaylist.id;
export const getAppleSelectedPlaylistTracks = (state) => state.apple.selectedPlaylist.tracks;
export const getAppleSelectedPlaylistStatus = (state) => state.apple.selectedPlaylist.status;

export const useAppleSelectors = () => {
    const { state } = useAppContext()
    console.log(state.apple)
    const userId = getAppleUserId(state);
    const userStatus = getAppleUserStatus(state);
    const playlists = getApplePlaylists(state);
    const playlistsStatus = getApplePlaylistsStatus(state);
    const selectedPlaylist = getAppleSelectedPlaylist(state);
    const selectedPlaylistId = getAppleSelectedPlaylistId(state);
    const selectedPlaylistTracks = getAppleSelectedPlaylistTracks(state);
    const selectedPlaylistStatus = getAppleSelectedPlaylistStatus(state);

    return { userId, userStatus, playlists, playlistsStatus, selectedPlaylistId, selectedPlaylistTracks, selectedPlaylistStatus, selectedPlaylist }
}

//APP SELECTORS
export const getSpotifyIsAuth = (state) => state.app.spotifyIsAuth;
export const getAppleIsAuth = (state) => state.app.appleIsAuth;
export const getExportFromApple = (state) => state.app.exportFromApple;
export const getSelectedPlayListByProvider = (state) => (provider) => state[provider].selectedPlaylist;
export const getPlaylistsByProvider = (state) => (provider) => state[provider].playlists

export const useAppSelectors = () => {

    const { state } = useAppContext();

    const getSelectedPlaylist = getSelectedPlayListByProvider(state);
    const getPlaylists = () => getPlaylistsByProvider(state);
    const spotifyIsAuth = getSpotifyIsAuth(state);
    const appleIsAuth = getAppleIsAuth(state);
    const exportFromApple = getExportFromApple(state);

    return { spotifyIsAuth, appleIsAuth, exportFromApple, getSelectedPlaylist, getPlaylists }
}