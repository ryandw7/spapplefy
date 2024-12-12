import React from 'react';
import { Box, Typography, List, ListItem, useTheme } from '@mui/material';
export default function SpotifyList() {
const theme = useTheme();

    return (
        <Box sx={{
            height: "100vh",
            width: "50vw",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            padding: 3,
            margin: 0
        }}>
            <Typography variant="h2">
                Spotify
            </Typography>
            <List sx={{width: "80%", height: "80%",boxShadow: theme.shadows[7], backgroundColor: theme.palette.background.paper}}>
                
                </List>
        </Box>
    )
}