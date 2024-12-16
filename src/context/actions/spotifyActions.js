import useAppContext from "../context";
import { fetchSpotifyPlaylists, fetchSpotifyUser } from "../../utils/api_utils/spotifyUtils";
import { setSelectedPlaylist } from "./appActions";
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
