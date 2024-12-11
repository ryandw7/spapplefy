import * as React from 'react';
import { Button, Grid2, Container, Box, Typography, useTheme, Paper } from '@mui/material';

export default function Start() {
    const theme = useTheme()
    return (
        <Container sx={{ height: '100%' }}>
            <Grid2 container justifyContent="center" alignItems="center">

                <Grid2 size={6} container justifyContent="center" alignItems="center">
                    <Box justifyContent="center" alignItems="center" sx={{ m: 30 }}>
                        <Paper elevation={8} sx={{ backgroundColor: theme.palette.background.paper, padding: 5 }} >
                            <Typography variant='h2'>Spotify</Typography>
                            <Button variant="contained">Contained</Button>
                        </Paper>
                    </Box>
                </Grid2>
                <Grid2 size={6} container justifyContent="center" alignItems="center">
                    <Box justifyContent="center" alignItems="center" sx={{ m: 30 }}>
                        <Paper elevation={8} sx={{ backgroundColor: theme.palette.background.paper, padding: 5 }} >
                            <Typography justifyContent="center" alignItems="center" variant='h2' sx={{width: "fit-content"}}>Apple</Typography>
                            <Button variant="contained">Contained</Button>
                        </Paper>
                    </Box>
                </Grid2>
            </Grid2>
        </Container >

    )
