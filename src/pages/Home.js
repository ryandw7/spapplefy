import React, { useState} from 'react';
import { Box, Typography, Paper, List, useTheme, Button } from '@mui/material';
import { ListAlt } from '@mui/icons-material';
import AppleList from '../features/AppleList';
import SpotifyList from '../features/SpotifyList';
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';
export default function Home() {

    const [ order, setOrder ] = useState([<SpotifyList/>, <AppleList/>])
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
           {order[0]}
            <Button>
                <SwapHorizIcon sx={{fontSize: 50}}/>
            </Button>
            {order[1]}
        </Box>
    )
}