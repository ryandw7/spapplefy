import React, { useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import useAppContext from '../context/context';
import PlaylistList from '../components/PlaylistList';
import TrackList from '../components/TrackList';
import { useSpotifyActions } from '../context/actions';
import { useSpotifySelectors } from '../context/selectors';
import useActionChain from '../utils/hooks/useActionChain';
export default function SpotifyList({ order }) {
    const { selectedPlaylist, playlists, userId } = useSpotifySelectors()
    const { setSpotifyUser, setSpotifyPlaylists } = useSpotifyActions()
    console.log(userId)
    useActionChain([setSpotifyUser, setSpotifyPlaylists],[])

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
                    Spotify
                </Typography>
            </Box>
            {/*playlists &&
            <Box sx={{ width: "100%", height: "80%", display: "flex", flexDirection: "row" }}>
                {order === 'first' ?
                    <>
                        <PlaylistList provider='spotify' />
                        {selectedPlaylist &&
                            <TrackList playlist={selectedPlaylist} provider="spotify" />
                        }
                    </>
                    :
                    <>
                        {selectedPlaylist &&
                            <TrackList playlist={selectedPlaylist} provider="spotify" />
                        }
                        <PlaylistList provider='spotify' />
                    </>
                }
            </Box>
*/}
        </Box>
    )
}