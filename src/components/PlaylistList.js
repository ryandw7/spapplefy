import React from 'react';
import { Box, Paper, Typography, List, ListItem, ListItemText } from '@mui/material';
import useAppContext from '../context/context';
import theme from '../styles/theme';
import { useAppSelectors } from '../context/selectors/appSelectors';
import { useAppActions } from '../context/actions/appActions';
export default function PlaylistList({ provider }) {
    
    const { getPlaylist, getSelectedPlaylist } = useAppSelectors();
    const { setSelectedPlaylistByProvider } = useAppActions();
    const selectedPlaylist = getSelectedPlaylist(provider);
    const playlists = []
    const handlePlaylistClick = (playlist) => {
        if (selectedPlaylist === playlist) {
            setSelectedPlaylistByProvider(provider, {})
        } else {
            setSelectedPlaylistByProvider(provider, playlist)
        }
    };
    const selectedBorder = (playlist) => {
        if (selectedPlaylist === playlist) {
            return `3px solid ${theme.palette.primary.main}`
        } else {
            return `3px solid ${theme.palette.background.default}`
        }
    };

    const handleResize = () => {
        if (selectedPlaylist) {
            return "20%"
        } else {
            return ("70%")

        }
    }
    return (<Box sx={{ boxSizing: "border-box", width: () => handleResize(), minWidth: "150px", height: "100%", backgroundColor: theme.palette.background.paper, padding: "10px", boxShadow: theme.shadows[7], transition: 'width 0.3s ease-in-out',}}>

        <Typography variant="h3" sx={{ marginBottom: 2, width: "100%", borderBottom: `3px solid ${theme.palette.primary.main}` }}>
            Playlists
        </Typography>
        <List sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "flex-start" }}>

            {playlists.map((playlist, index) => (
                <ListItem
                    key={index}
                    button
                    onClick={() => handlePlaylistClick(playlist)}
                    selected={true}
                    sx={{
                        padding: "4px",
                        margin: "3px",
                        borderRadius: "8px",
                        border: selectedBorder(playlist),
                        backgroundColor: theme.palette.background.paper
                    }}
                >
                    <ListItemText primary={playlist.title} />
                </ListItem>
            ))}
        </List>

    </Box>)
}