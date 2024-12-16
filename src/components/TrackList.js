import React from 'react';
import Track from './Track';
import IosShareIcon from '@mui/icons-material/IosShare';
import { Box, Button, Paper, Typography, List, useTheme, Collapse } from '@mui/material';
import useAppContext from '../context/context';
export default function TrackList({ playlist, provider }) {
    const { state } = useAppContext()
    let selectedPlaylist;
    let playlistTitle;
    const theme = useTheme();
    if (playlist && playlist.tracks) {
        playlistTitle = playlist.title;
        playlist = playlist.tracks
        selectedPlaylist = state.playlists[provider].selectedPlaylist;
    }

    return (<Box sx={{ height: "100%", width: "75%", padding: "10px", minWidth: "375px" }}>

        <Typography variant="h3" sx={{ borderBottom: `3px solid ${theme.palette.primary.main}`, marginBottom: 2, paddingLeft: "5%", paddingRight: "5%" }}>
            {playlistTitle && `${playlistTitle}/Tracks`}
        </Typography>


        <Collapse in={!!playlist} sx={{
            overflowY: "scroll", maxHeight: "90%", '&::-webkit-scrollbar': {
                width: '8px',
            },
            '&::-webkit-scrollbar-track': {
                backgroundColor: '#f1f1f1',
                borderRadius: '10px',
            },
            '&::-webkit-scrollbar-thumb': {
                backgroundColor: '#888',
                borderRadius: '10px',
            },
            '&::-webkit-scrollbar-thumb:hover': {
                backgroundColor: '#555',
            }
        }}>
            {playlist &&

                <List sx={{ maxHeight: "100%", backgroundColor: theme.palette.background.default }}>

                    {selectedPlaylist && playlist.map((track, index) => (

                        <Track track={track} index={index} />
                    ))}
                </List>
            }
        </Collapse>

    </Box>)
}
