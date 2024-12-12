import React, { useEffect } from 'react';
import { Button, Box, Typography, useTheme, Paper } from '@mui/material';
import { spotifyAuthFlow, hashSpotifyToken } from '../api_utils/spotifyUtils.js';
import { hashAppleToken } from '../api_utils/appleUtils.js';
import useAppContext from '../context.js';
import { useNavigate } from 'react-router';
import CheckIcon from '@mui/icons-material/Check';
export default function Start() {
    const navigate = useNavigate();
    const theme = useTheme();
    const { state, updateState } = useAppContext();

    const handleSpotifyButtonClick = () => {
        window.sessionStorage.setItem("recent", 'spotify');
        window.location.href = spotifyAuthFlow();
    }
    const handleAppleButtonClick = () => {
        console.log("apple button clicked")
        window.sessionStorage.setItem("recent", 'apple');
        window.sessionStorage.setItem("apple_token", "token")
        updateState('auth',
            {
                appleIsAuth: true
            }
        )
    }


    useEffect(() => {
        const recent = window.sessionStorage.getItem("recent")
        if (recent === 'spotify') {
            hashSpotifyToken();
        } else if (recent === 'apple') {
            hashAppleToken();
        }
        const spotifyToken = window.sessionStorage.getItem("spotify_token");
        const appleToken = window.sessionStorage.getItem("apple_token");
        if (spotifyToken) {
            updateState('auth',
                {
                    spotifyIsAuth: true
                }
            )
        }
        if (appleToken) {
            updateState('auth',
                {
                    appleIsAuth: true
                }
            )
        }

    })
   
    const buttonIsDisabled = !state.auth.appleIsAuth || !state.auth.spotifyIsAuth

    return (

        <Box
            sx={{
                height: "100vh", // Full viewport height
                display: "flex",
                flexDirection: "column",
                justifyContent: "center", // Centers content vertically
                alignItems: "center", // Centers content horizontally
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-around",
                    alignItems: "center",
                    width: "80%", // Adjust width as needed
                    gap: 4,
                }}
            >
                {/* Spotify Box */}
                <Paper
                    elevation={8}
                    sx={{
                        backgroundColor: theme.palette.background.paper,
                        padding: 5,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        width: "400px",
                        height: "200px",
                        marginTop: -25
                    }}
                >
                    <Typography variant="h2" sx={{ marginBottom: 5 }}>Spotify</Typography>
                    {state.auth.spotifyIsAuth ? (
                        <CheckIcon />
                    ) : (
                        <Button variant="contained" onClick={handleSpotifyButtonClick}>
                            Contained
                        </Button>
                    )}
                </Paper>

                {/* Apple Box */}
                <Paper
                    elevation={8}
                    sx={{
                        backgroundColor: theme.palette.background.paper,
                        padding: 5,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        width: "400px",
                        height: "200px",
                        marginTop: -25
                    }}
                >
                    <Typography variant="h2" sx={{ marginBottom: 5 }}>Apple</Typography>
                    {
                        state.auth.appleIsAuth ?
                            <CheckIcon />
                            :
                            <Button variant="contained" onClick={handleAppleButtonClick}>Contained</Button>
                    }
                </Paper>
                <Button
                    variant="contained"
                    sx={{
                        width: "300px",
                        fontSize: "20px",
                        position: "absolute",
                        top: "65%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                    }}
                    disabled={buttonIsDisabled}
                    onClick={() => navigate("/home")}
                >
                    Continue
                </Button>
            </Box>
        </Box>

    )
}