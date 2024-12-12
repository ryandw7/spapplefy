import React from 'react';
import { useTheme, Box, Typography, List, ListItem } from '@mui/material';
import useAppContext from '../context';
import PlaylistList from '../components/PlaylistList';
import TrackList from '../components/TrackList';
export default function AppleList() {
const theme = useTheme();
const {state} = useAppContext()
    return (
        <Box sx={{
            height: "100vh",
            width: "50vw",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            padding: 3,
            margin: 0
        }}>
            <Typography variant="h2" sx={{justifySelf: "flex-start", width: "100%"}}>
                Apple
            </Typography>
            <PlaylistList provider='apple'/>
            <TrackList playlist={state.playlists.apple.selectedPlaylist}/>
        </Box>
    )
}