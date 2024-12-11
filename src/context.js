import React, { useState, createContext, useContext } from "react";
import { fetchSpotifyUser } from "./api_utils/spotifyUtils";
export const authObj = {
spotifyIsAuth: false,
appleIsAuth: false,
}

const initialAuthState = {
auth: authObj,
setAuth: ()=>{},
fetchSpotifyUser: fetchSpotifyUser
}

const AuthContext = createContext(initialAuthState)

export const AuthProvider = ({children}) => {
    const [auth, setAuth] = useState(authObj)
    return (
        <AuthContext.Provider value={{auth, setAuth}}>{children}</AuthContext.Provider>
    )
}

const useAuth = () => {
    const context = useContext(AuthContext);

    if (context === undefined){
        throw new Error("useAuth must be used within a ContextProvider");
    }
    return context;
}

export default useAuth;