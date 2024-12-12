import React, { useState} from 'react';
import { Box, Typography, Paper, List, useTheme, Button } from '@mui/material';
import { ListAlt } from '@mui/icons-material';
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
    const theme = useTheme()
    return (
        <Box sx={{
            height: "100vh", // Full viewport height
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