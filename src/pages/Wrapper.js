import React from 'react';
import { useTheme, Box, Container, Typography, Grid2, Paper } from '@mui/material';
import { Outlet } from 'react-router';

export default function Wrapper() {
    const theme = useTheme()

    return (
        <Box sx={{ minWidth: '100%', m: 0, p: 0 }}>
            <Paper elevation={8}
                    sx={{
                        position: "fixed",
                        backgroundColor: theme.palette.background.paper,
                        padding: 1,
                        display: "flex",
                        width: "100vw",
                        
                    }}>
                <Typography variant='h1' >SPAPPLEFY</Typography>
            </Paper>
            <Outlet />
        </Box>
    )
}