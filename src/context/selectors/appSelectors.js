import useAppContext from "../context";

//APP SELECTORS
export const getSpotifyIsAuth = (state) => state.app.spotifyIsAuth || false;
export const getAppleIsAuth = (state) => state.app.appleIsAuth || false;
export const getExportFromApple = (state) => state.app.exportFromApple;

export const useAppSelectors = () => {

    const { state } = useAppContext();
    
    if (!state) {
        console.error("State is undefined in useAppSelectors");
        return {};
    }
    const spotifyIsAuth = getSpotifyIsAuth(state) || false;
    const appleIsAuth = getAppleIsAuth(state) || false;
    const exportFromApple = getExportFromApple(state);

    return { spotifyIsAuth, appleIsAuth, exportFromApple }
}