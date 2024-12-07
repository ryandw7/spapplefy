import React from 'react';
import { useTheme, Box, Container, Typography, Grid2 } from '@mui/material';
import { Outlet } from 'react-router';

export default function Wrapper() {
    const theme = useTheme()

    return (
        <Box sx={{ minWidth: '100%', m: 0, p: 0 }}>
            <Grid2 container sx={{ m: 0, backgroundColor: theme.palette.background.paper }}>
                <Typography variant='h1' >SPAPPLEFY</Typography>
            </Grid2>
            <Outlet />
        </Box>
    )
}