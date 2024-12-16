import useAppContext from "../context";

//APP SELECTORS
export const getSpotifyIsAuth = (state) => state.app.spotifyIsAuth || false;
export const getAppleIsAuth = (state) => state.app.appleIsAuth || false;
export const getExportFromApple = (state) => state.app.exportFromApple;
export const getSelectedPlayListByProvider = (state) => (provider) => state[provider].selectedPlaylist;
export const getPlaylistsByProvider = (state) => (provider) => state[provider].playlists

export const useAppSelectors = () => {

    const { state } = useAppContext();
    console.log(state)
    if (!state) {
        console.error("State is undefined in useAppSelectors");
        return {};
    }
    const getSelectedPlaylist = getSelectedPlayListByProvider(state);
    const getPlaylists = () => getPlaylistsByProvider(state);
    const spotifyIsAuth = getSpotifyIsAuth(state) || false;
    const appleIsAuth = getAppleIsAuth(state) || false;
    const exportFromApple = getExportFromApple(state);

    return { spotifyIsAuth, appleIsAuth, exportFromApple, getSelectedPlaylist, getPlaylists }
}