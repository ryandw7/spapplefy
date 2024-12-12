import React from 'react';
import Track from './Track';
import { Grid2, Paper, Typography, List} from '@mui/material';

export default function TrackList({playlist}){

if(playlist && playlist.tracks){
    playlist = playlist.tracks
}

return (<Grid2 item xs={12} sm={6}>
    <Paper elevation={3} sx={{ padding: 2, borderRadius: 2 }}>
        <Typography variant="h6" sx={{ marginBottom: 2 }}>
            Playlists
        </Typography>
        {playlist &&
        <List>
            {playlist.map((track, index) => (
                <Track track={track} index={index}/>
            ))}
        </List>
        }
    </Paper>
</Grid2>)
}