import { useEffect } from 'react';
import useAppActions from "./appActions";
import useSpotifyActions from "./spotifyActions";
import useAppContext from '../context';


const useSpotifyPlaylists = () => {

    const { state } = useAppContext();
    const { setSpotifyIsAuth } = useAppActions();
    const { setSpotifyUser, setSpotifyPlaylists } = useSpotifyActions();

    useEffect(() => {

        const token = window.sessionStorage.getItem("spotify_token");

        setSpotifyIsAuth();
        setSpotifyUser();
        setSpotifyPlaylists(token);

    }, [])

    return {
        spotifyPlaylists: state.spotify.playlists.items,
        spotifyPlaylistsLoading: state.spotify.playlists.status.loading
      };
}

export default useSpotifyPlaylists;