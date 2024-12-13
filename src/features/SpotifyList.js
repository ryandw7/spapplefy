import React from 'react';
import { Box, Typography } from '@mui/material';
import useAppContext from '../context';
import PlaylistList from '../components/PlaylistList';
import TrackList from '../components/TrackList';
export default function SpotifyList({order}) {
  
    const { state } = useAppContext();
    const selectedPlaylist = state.playlists.spotify.selectedPlaylist
    return (
        <Box sx={{
            height: "100%",
            width: "50vw",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: 0 ,
            margin: 0
        }}>
            <Box sx={{ alignSelf: 'flex-start', justifySelf: "flex-start", width: "100%", textAlign: "center", marginBottom: 1, marginTop: 0}}>
            <Typography variant="h2" sx={{width: "100%", textAlign: "center"}}>
                Spotify
            </Typography>
            </Box>
            <Box sx={{width:"100%", height: "80%", display:"flex", flexDirection:"row"}}>
                {order === 'first' ?
                    <>
                        <PlaylistList provider='spotify' />
                        {selectedPlaylist &&
                        <TrackList playlist={state.playlists.spotify.selectedPlaylist} provider="spotify" />
                    }
                    </>
                    :
                    <>
                    {selectedPlaylist &&
                        <TrackList playlist={state.playlists.spotify.selectedPlaylist} provider="spotify" />
                    }
                    <PlaylistList provider='spotify' />
                    </>
                }
            </Box>
        </Box>
    )
}