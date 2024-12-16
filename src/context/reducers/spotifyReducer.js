
const initialSpotifyState = {
    user: {
        status: { loading: false, error: null },
        id: '',
    },
    playlists: {
        status: { loading: false, error: null },
        items: []
    },
    selectedPlaylist: {
        id: '',
        status: { loading: false, error: null },
        tracks: []
    }

}
const spotifyReducer = (state = initialSpotifyState, action) => {
    switch (action.type) {
        case 'SET_SPOTIFY_USER_PENDING':
            return { ...state, user: null, status: { loading: true, error: null } };
        case 'SET_SPOTIFY_USER_FULFILLED':
            return { ...state, user: action.payload, status: { loading: false, error: null } };
        case 'SET_SPOTIFY_USER_REJECTED':
            return { ...state, user: null, status: { loading: false, error: action.payload.error } };
        case 'SET_SPOTIFY_PLAYLISTS_PENDING':
            return { ...state, playlists: null, status: { loading: true, error: null } };
        case 'SET_SPOTIFY_PLAYLISTS_FULFILLED':
            return { ...state, playlists: action.payload, status: { loading: false, error: null } };
        case 'SET_SPOTIFY_PLAYLISTS_REJECTED':
            return { ...state, playlists: null, status: { loading: false, error: action.payload.error } };
        default:
            return state;
    }
};

export default spotifyReducer;