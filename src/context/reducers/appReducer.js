const initialAppState = {
    spotifyIsAuth: false,
    appleIsAuth: false,
    exportFromApple: false,
}
const appReducer = (state = initialAppState, action) => {
    console.log('App Reducer: State before action:', state);
    console.log('App Reducer: Action:', action);
    switch (action.type) {
        case 'SET_APPLE_IS_AUTH_TRUE':
            return { ...state, appleIsAuth: true };
        case 'SET_SPOTIFY_IS_AUTH_TRUE':
            return { ...state, spotifyIsAuth: true };
        case 'SET_EXPORT_FROM_APPLE':
            return { ...state, exportFromApple: action.payload };
    }
};

export default appReducer;