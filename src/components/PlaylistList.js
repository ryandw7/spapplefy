import React from 'react';
import { Grid2, Paper, Typography, List, ListItem, ListItemText } from '@mui/material';
import useAppContext from '../context';

export default function PlaylistList({ provider }) {
    const { state, updateState } = useAppContext();
    const playlists = state.playlists[provider].playlists;
    const selectedPlaylist = state.playlists[provider].selectedPlaylist;

    console.log(selectedPlaylist)

    const handlePlaylistClick = (playlist) => {
        const newObj = state.playlists;
        newObj[provider] = {
            playlists: playlists,
            selectedPlaylist: playlist
        }

        updateState('playlists', newObj)
    };

    return (<Grid2 item xs={12} sm={6}>
        <Paper elevation={3} sx={{ padding: 2, borderRadius: 2 }}>
            <Typography variant="h6" sx={{ marginBottom: 2 }}>
                Playlists
            </Typography>
            <List>
                {playlists.map((playlist, index) => (
                    <ListItem
                        key={index}
                        button
                        onClick={() => handlePlaylistClick(playlist)}
                        selected={selectedPlaylist === playlist}
                        sx={{
                            '&.Mui-selected': { bgcolor: 'grey.200', fontWeight: 'bold' },
                            '&.Mui-selected:hover': { bgcolor: 'grey.300' },
                        }}
                    >
                        <ListItemText primary={playlist.title} />
                    </ListItem>
                ))}
            </List>
        </Paper>
    </Grid2>)
}