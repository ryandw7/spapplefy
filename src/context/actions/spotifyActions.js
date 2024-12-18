import useAppContext from "../context";
import { fetchSpotifyPlaylists, fetchSpotifyUser } from "../../utils/api_utils/spotifyUtils";
import { setSelectedPlaylist } from "./appActions";

const useSpotifyActions = () => {
    const { dispatch, state } = useAppContext()

    const setSpotifyUser = async () => {
        dispatch({ type: 'SET_SPOTIFY_USER_PENDING' });
        try {
            const user = await fetchSpotifyUser();
            const payload = { id: user.id, name: user.display_name };
            
            dispatch({ type: 'SET_SPOTIFY_USER_FULFILLED', payload: payload });
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

    return { setSpotifyUser, setSpotifyPlaylists }
}

export default useSpotifyActions;