import React, { useState, createContext, useContext } from "react";
import { retrieveSpotifyUser, getSpotifyPlaylists } from './api_utils/spotifyUtils'
import { mockAppleMusicPlaylists, mockSpotifyPlaylists } from "./mockData";
const initialState = {
    auth: {
        spotifyIsAuth: false,
        appleIsAuth: false
    },
    user: {
        apple: {},
        spotify: {
            userId: ''
        }
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
    const setSpotifyId = async () => {
        const data = await retrieveSpotifyUser();
        const userId = await data.id;

        setState((prev) => {
            return {
                ...prev,
                user: {
                    ...prev.user,
                    spotify: {
                        ...prev.user.spotify,
                        id: userId
                    }
                }
            }
        })
        const token = window.sessionStorage.getItem("spotify_token");

        const playlistData = await getSpotifyPlaylists(userId, token);
        const playlists = playlistData;
        const playlistsArr = playlists.map((playlist) => {
            return {
                image: playlist.images[0],
                title: playlist.name,
                id: playlist.id
            }

        })
        console.log(playlistsArr)
    }
    return (
        <Context.Provider value={{ state, updateState, setSpotifyId }}>{children}</Context.Provider>
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