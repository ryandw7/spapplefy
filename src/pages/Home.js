import React, { useState, useEffect } from 'react';
import { Box, Button, Typography } from '@mui/material';
import AppleList from '../features/AppleList';
import SpotifyList from '../features/SpotifyList';
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';
import IosShareIcon from '@mui/icons-material/IosShare';
import { useAppActions } from '../context/actions/appActions';
import { useAppSelectors } from '../context/selectors/appSelectors';
export default function Home() {
    const { setSpotifyIsAuth, setAppleIsAuth } = useAppActions();
    const { spotifyIsAuth, appleIsAuth } = useAppSelectors() || false;
    const [exportFromApple, setExportFromApple] = useState(true);
    const [ loading, setLoading ] = useState(true);

    useEffect(() => {
        setSpotifyIsAuth();
        setAppleIsAuth();
        setLoading(false)
    }, [])
    const swapOrder = () => {
        console.log("swapping")
        setExportFromApple(() => {
            if (exportFromApple === true) {
                return false
            } else {
                return true
            }
        })
    }
    if(loading){
        return <Box><Typography>No Content</Typography></Box>
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
            
            {/*appleIsAuth && spotifyIsAuth &&
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
          */  }

        </Box>
    )
}