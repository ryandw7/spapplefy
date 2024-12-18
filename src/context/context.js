import React, { createContext, useContext, useReducer } from "react";
import rootReducer from "./reducers/rootReducer";
import { mockAppleMusicPlaylists } from "../mockData";



const initialState = {
    apple: {
        user: {
            status: { loading: false, error: null },
            id: '',
        },
        playlists: {
            status: { loading: false, error: null },
            items: mockAppleMusicPlaylists
        },
    },
    spotify: {
        user: {
            status: { loading: false, error: null },
            id: '',
        },
        playlists: {
            status: { loading: false, error: null },
            items: []
        }

    },
    app: {
        spotifyIsAuth: false,
        appleIsAuth: false,
        selectedProvider: 'spotify',
        selectedPlaylist: {
            id: '',
            playlist: [],
            status: { loading: false, error: null },
            tracks: []
        }
    },
};


const Context = createContext(initialState);



export const ContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(rootReducer, initialState);
    console.log(state)
    return (
        <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
    );
};

const useAppContext = () => {
    const context = useContext(Context);

    if (context === undefined) {
        throw new Error("useAppContext must be used within a ContextProvider");
    }
    return context;
};

export default useAppContext;
