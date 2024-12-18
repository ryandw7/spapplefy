import React from 'react';
import { Box, Typography } from '@mui/material';
import useSpotifyPlaylists from '../context/actions/useSpotifyPlaylists';

export default function Home() {

    const {spotifyPlaylistsLoading, spotifyPlaylists } = useSpotifyPlaylists();

    if(spotifyPlaylistsLoading || !spotifyPlaylists){
        return (
            <Box><Typography>Loading...</Typography></Box>
        )
    }
    
    //console.log(appleIsAuth && appleIsAuth, spotifyIsAuth && spotifyIsAuth)
    return (
        <Box sx={{
            height: "calc(100vh - 75px)", // Full viewport height
            width: "100vw",
            justifyContent: "center", // Centers content vertically
            alignItems: "center", // Centers content horizontally
            display: "flex",
            flexDirection: "row",
            margin: 0,
            padding: 3
        }}>

           {/*  appleIsAuth && spotifyIsAuth &&
                <>
                    {
                        exportFromApple ?
                            <AppleList order="first" />
                            :
                            <SpotifyList order="first" />
                    }
                    <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "space-between", alignItems: "space-between" }}>
                        <Button ><IosShareIcon sx={{ fontSize: 50 }} /></Button>
                        <Button onClick={swapOrder}>
                            <SwapHorizIcon sx={{ fontSize: 50 }} />
                        </Button>
                    </Box>
                    {
                        exportFromApple ?
                            <SpotifyList order="second" />
                            :
                            <AppleList order="second" />
                    }
                </>
           */ }

        </Box>
    )
}