import React, { useState} from 'react';
import { Box, Button } from '@mui/material';
import AppleList from '../features/AppleList';
import SpotifyList from '../features/SpotifyList';
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';
export default function Home() {

    const [ exportFromApple, setExportFromApple ] = useState(true)

    const swapOrder = () => {
        console.log("swapping")
        setExportFromApple(()=>{
            if(exportFromApple === true){
                return false
            }else{
                return true
            }
        })
    }

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
           {
            exportFromApple ?
            <AppleList/>
            :
            <SpotifyList/>
           }
            <Button onClick={swapOrder}>
                <SwapHorizIcon sx={{fontSize: 50}}/>
            </Button>
           
           {
            exportFromApple ?
            <SpotifyList/>
            :
            <AppleList/>
           } 
        </Box>
    )
}