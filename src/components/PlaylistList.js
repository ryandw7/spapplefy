import React from 'react';
import { Box, Paper, Typography, List, ListItem, ListItemText } from '@mui/material';
import useAppContext from '../context';

export default function PlaylistList({ provider }) {
    const { state, updateState } = useAppContext();
    const playlists = state.playlists[provider].playlists;

    const handlePlaylistClick = (playlist) => {
        const newObj = state.playlists;
        newObj[provider] = {
            playlists: playlists,
            selectedPlaylist: null
        }
        updateState('playlists', newObj)
        setTimeout(() => {
            newObj[provider] = {
                playlists: playlists,
                selectedPlaylist: playlist
            }
            updateState('playlists', newObj)
        }, 10)

    };

    return (<Box sx={{ height: "100%" }}>
        <Paper elevation={3} sx={{ padding: 2, borderRadius: 2, height: "90%" }}>
            <Typography variant="h6" sx={{ marginBottom: 2 }}>
                Playlists
            </Typography>
            <List>
                {playlists.map((playlist, index) => (
                    <List>
                    <ListItem
                        key={index}
                        button
                        onClick={() => handlePlaylistClick(playlist)}
                        selected={true}
                        sx={{
                            '&.Mui-selected': {
                                bgcolor: 'grey.200',
                                fontWeight: 'bold',
                                border: '2px solid red', // For visibility
                                borderRadius: '8px',
                            },
                            '&.Mui-selected:hover': { bgcolor: 'grey.300' },
                        }}
                    >
                        <ListItemText primary={playlist.title} />
                    </ListItem>
                    </List>
                ))}
            </List>
        </Paper>
    </Box>)
}