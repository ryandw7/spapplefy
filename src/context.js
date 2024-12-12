import React, { useState, createContext, useContext } from "react";
import { fetchSpotifyUser } from "./api_utils/spotifyUtils";
import { spotifyPlaylists } from "./mockData";
import { mockAppleMusicPlaylists, mockSpotifyPlaylists } from "./mockData";
const initialState = {
    auth: {
        spotifyIsAuth: false,
        appleIsAuth: false
    },
    playlists: {
        apple: {
            playlists: mockAppleMusicPlaylists,
            selectedPlaylist: null
        },
        spotify: {
            playlists: mockSpotifyPlaylists,
            selectedPlaylist: null
        }
    }
}

const Context = createContext({
    state: initialState,
    setState: () => { }
})

export const ContextProvider = ({ children }) => {

    const [state, setState] = useState(initialState)
    const updateState = (key, value) => {
        setState((prev) => {
            return {
                ...prev,
                [key]: {
                    ...prev[key],
                    ...value
                }
            }
        })
    }
    return (
        <Context.Provider value={{ state, updateState }}>{children}</Context.Provider>
    )
}

const useAppContext = () => {
    const context = useContext(Context);

    if (context === undefined) {
        throw new Error("useAuth must be used within a ContextProvider");
    }
    return context;
}

export default useAppContext;