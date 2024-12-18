const initialAppState = {
    spotifyIsAuth: false,
    appleIsAuth: false,
    selectedProvider: 'spotify',
    selectedPlaylist: {
        id: '',
        playlist: [],
        status: { loading: false, error: null },
        tracks: []
    }
}
const appReducer = (state = initialAppState, action) => {
    console.log('App Reducer: Action:', action);
    switch (action.type) {
        case 'SET_APPLE_IS_AUTH_TRUE':
            return { ...state, appleIsAuth: true };
        case 'SET_SPOTIFY_IS_AUTH_TRUE':
            return { ...state, spotifyIsAuth: true };
        case 'SET_EXPORT_FROM_APPLE':
            return { ...state, exportFromApple: action.payload };
        case 'UNSELECT_PLAYLIST':
            return { ...state, selectedPlaylist: { ...state.selectedPlaylist, playlist: [] } };
        case 'SET_SELECTED_PLAYLIST':
            return { ...state, selectedPlaylist: {...state.selectedPlaylist, playlist: action.payload}}
        default:
            return state;
    }
};

export default appReducer;