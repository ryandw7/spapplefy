import useAppContext from "../context";


export const setSelectedPlaylist = (dispatch, provider, playlist) => {
    if (provider === 'spotify') {
        dispatch({ type: 'SET_SELECTED_SPOTIFY_PLAYLIST', payload: playlist })
    } else {
        dispatch({ type: 'SET_SELECTED_APPLE_PLAYLIST', payload: playlist })
    }
}
//APP ACTIONS
export const useAppActions = () => {
    const { state, dispatch } = useAppContext();
    const setSelectedPlaylistByProvider = (provider, playlist) => {
        setSelectedPlaylist(dispatch, provider, playlist)
    }

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
    return { setSpotifyIsAuth, setAppleIsAuth, setExportFromApple }
}