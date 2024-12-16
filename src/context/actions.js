import { fetchSpotifyUser, fetchSpotifyPlaylists } from "../utils/api_utils/spotifyUtils";
import useAppContext from "./context";



//ASYNC ACTIONS
//SPOTIFY

export const setSelectedPlaylist = (dispatch, provider, playlist) => {
    if (provider === 'spotify') {
        dispatch({ type: 'SET_SELECTED_SPOTIFY_PLAYLIST', payload: playlist })
    } else {
        dispatch({ type: 'SET_SELECTED_APPLE_PLAYLIST', payload: playlist })
    }
}

export const useSpotifyActions = () => {
    const { state, dispatch } = useAppContext()

    const setSpotifyUser = async () => {
        dispatch({ type: 'SET_SPOTIFY_USER_PENDING' });
        try {
            const user = await fetchSpotifyUser();
            const payload = { id: user.id, name: user.name }; // Example structure
            dispatch({ type: 'SET_SPOTIFY_USER_FULFILLED', payload });
        } catch (error) {
            dispatch({
                type: 'SET_SPOTIFY_USER_REJECTED',
                payload: { error: error.message },
            });
        }
    };

    const setSpotifyPlaylists = async (token) => {
        dispatch({ type: 'SET_SPOTIFY_PLAYLISTS_PENDING' });
        try {
            const userId = state.spotify.user.id;
            const playlistsData = await fetchSpotifyPlaylists(userId, token);
            const playlists = playlistsData.items;
            const playlistsArr = playlists.map((playlist) => {
                return {
                    image: playlist.images[0],
                    title: playlist.name,
                    id: playlist.id
                }
            })
            dispatch({ type: 'SET_SPOTIFY_PLAYLISTS_FULFILLED', payload: playlistsArr })
        } catch (error) {
            dispatch({ type: 'SET_SPOTIFY_PLAYLISTS_REJECTED', payload: { error: error.message } })
        }
    }

    const setSelectedSpotifyPlaylist = (playlist) => {
        setSelectedPlaylist(dispatch, 'spotify', playlist)
    }
    return { setSpotifyUser, setSpotifyPlaylists, setSelectedSpotifyPlaylist }
}


export const useAppleActions = () => {
    const { dispatch } = useAppContext();

    const setSelectedApplePlaylist = (playlist) => {
        setSelectedPlaylist(dispatch, 'apple', playlist)
    }

    return setSelectedApplePlaylist()
}
//APP ACTIONS
export const useAppActions = () => {
    const { state, dispatch } = useAppContext();
    const setSelectedPlaylistByProvider = (provider, playlist) => {
        setSelectedPlaylist(dispatch, provider, playlist)
    }

    const setSpotifyIsAuth = () => {
        dispatch({ type: 'SET_SPOTIFY_IS_AUTH_TRUE' })
    }
    const setAppleIsAuth = () => {
        dispatch({ type: 'SET_APPLE_IS_AUTH_TRUE' })
    }
    const setExportFromApple = (bool) => {
        dispatch({ type: 'SET_EXPORT_FROM_APPLE', payload: bool })
    }
    return { setSpotifyIsAuth, setAppleIsAuth, setExportFromApple, setSelectedPlaylistByProvider }
}