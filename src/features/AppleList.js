import React from 'react';
import { Box, Typography } from '@mui/material';
import useAppContext from '../context';
import PlaylistList from '../components/PlaylistList';
import TrackList from '../components/TrackList';
export default function AppleList() {

    const { state } = useAppContext()
    return (
        <Box sx={{
            height: "100%",
            width: "50vw",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: 0,
            margin: 0
        }}>
            <Box sx={{ alignSelf: 'flex-start', justifySelf: "flex-start", width: "100%", textAlign: "center", marginBottom: 1, marginTop: 0 }}>
                <Typography variant="h2" sx={{ width: "100%", textAlign: "center" }}>
                    Apple
                </Typography>
            </Box>
            <Box sx={{ width: "100%", height: "80%", display: "flex", flexDirection: "row" }}>
                <PlaylistList provider='apple' />
       
                    <TrackList playlist={state.playlists.apple.selectedPlaylist} provider="apple" />
                
            </Box>
        </Box>
    )
}