
const initialSpotifyState = {
    user: {
        status: { loading: false, error: null },
        id: '',
    },
    playlists: {
        status: { loading: false, error: null },
        items: []
    }
}
const spotifyReducer = (state = initialSpotifyState, action) => {
    console.log(state)
    switch (action.type) {
        //state.user
        case 'SET_SPOTIFY_USER_PENDING':
            return { ...state, user: { ...state.user, status: { loading: true, error: null } } };
        case 'SET_SPOTIFY_USER_FULFILLED':
            console.log(action.payload)
            return { ...state, user: { ...state.user, ...action.payload, status: { loading: false, error: null } } };
        case 'SET_SPOTIFY_USER_REJECTED':
            return { ...state, user: { ...state.user, status: { loading: false, error: action.payload.error } } };
        //state.playlists
        case 'SET_SPOTIFY_PLAYLISTS_PENDING':
            return { ...state, playlists: { ...state.playlists, status: { loading: true, error: null } } };
        case 'SET_SPOTIFY_PLAYLISTS_FULFILLED':
            return { ...state, playlists: {...state.playlists, items: action.payload, status: { loading: false, error: null }} };
        case 'SET_SPOTIFY_PLAYLISTS_REJECTED':
            return { ...state, playlists: {...state.playlists, status: { loading: false, error: action.payload.error }} };
        default:
            return state;
    }
};

export default spotifyReducer;