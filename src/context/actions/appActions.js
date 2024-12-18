import useAppContext from "../context";

//APP ACTIONS
const useAppActions = () => {
    const { state, dispatch } = useAppContext();

    const setSpotifyIsAuth = () => {
        if (window.sessionStorage.getItem("spotify_token")) {
            dispatch({ type: 'SET_SPOTIFY_IS_AUTH_TRUE' })
        }
    }
    
    const setAppleIsAuth = () => {
        if (window.sessionStorage.getItem("apple_token")) {
            dispatch({ type: 'SET_APPLE_IS_AUTH_TRUE' })
        }
    }

    const setExportFromApple = (bool) => {
        dispatch({ type: 'SET_EXPORT_FROM_APPLE', payload: bool })
    }

    const setSelectedPlaylist = (playlist) => {
        const currentSelected = state.selectedPlaylist;
        if (currentSelected === playlist) {
            dispatch({ type: 'UNSELECT_PLAYLIST'})
        } else {
            dispatch({ type: 'SET_SELECTED_PLAYLIST', payload: playlist })
        }
    }

    return { setSpotifyIsAuth, setAppleIsAuth, setExportFromApple, setSelectedPlaylist };

}

export default useAppActions;