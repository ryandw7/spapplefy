import React, { createContext, useContext, useReducer } from "react";
import rootReducer from "./reducer";
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
        selectedPlaylist: {
            id: '',
            status: { loading: false, error: null },
            tracks: []
        }

    },
    spotify: {
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

    },
    app: {
        spotifyIsAuth: false,
        appleIsAuth: false,
        exportFromApple: false,
    },
};

const Context = createContext();

export const ContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(rootReducer, initialState);

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
