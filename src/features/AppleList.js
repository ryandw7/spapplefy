import React from 'react';
import { Box, Typography } from '@mui/material';
import useAppContext from '../context/context';
import PlaylistList from '../components/PlaylistList';
import TrackList from '../components/TrackList';
//import { useAppleSelectors, useAppSelectors } from '../context/selectors';
import { useAppActions, useAppleActions } from '../context/actions';
export default function AppleList({ order }) {

    //const { selectedPlaylist, playlists } = useAppleSelectors();
    return (

        <Box sx={{

            minWidth: "500px",
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
            {/*playlists &&
                <Box sx={{ width: "100%", height: "80%", display: "flex", flexDirection: "row", justifyContent: "center" }}>
                    {order === 'first' ?
                        <>
                            <PlaylistList provider='apple' selectedPlaylist={selectedPlaylist} playlists={playlists} />
                            {selectedPlaylist &&
                                <TrackList playlist={selectedPlaylist} provider="apple" />
                            }
                        </>
                        :
                        <>
                            {selectedPlaylist &&
                                <TrackList playlist={selectedPlaylist} provider="apple" />
                            }
                            <PlaylistList provider='apple' />

                        </>
                    }
                </Box>
           */ }
        </Box>
    )
}