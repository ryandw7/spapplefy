import appReducer from "./appReducer";
import spotifyReducer from "./spotifyReducer";
import appleReducer from "./appleReducer";


const combineReducers = (reducers) => (state, action) => {
    return Object.keys(reducers).reduce((acc, key) => {
        acc[key] = reducers[key](state[key], action);
        return acc;
    }, {});
};

const reducers = {
    apple: appleReducer,
    spotify: spotifyReducer,
    app: appReducer
}

console.log(reducers)
const rootReducer = combineReducers(reducers)
export default rootReducer;