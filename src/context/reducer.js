const combineReducers = (reducers) => (state, action) => {
    return Object.keys(reducers).reduce((acc, key) => {
        acc[key] = reducers[key](state[key], action);
        return acc;
    }, {});
};

const appleReducer = (state, action) => {

};

const spotifyReducer = (state, action) => {
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


const appReducer = (state, action) => {
    switch(action.type){
        case 'SET_APPLE_IS_AUTH_TRUE':
            return {...state, appleIsAuth: true};
        case 'SET_SPOTIFY_IS_AUTH_TRUE':
            return {...state, spotifyIsAuth: true};
        case 'SET_EXPORT_FROM_APPLE':
            return { ...state, exportFromApple: action.payload};
    }
};

const reducers = {
    apple: appleReducer,
    spotify: spotifyReducer,
    app: appReducer
}

const rootReducer = combineReducers(reducers)
export default rootReducer;