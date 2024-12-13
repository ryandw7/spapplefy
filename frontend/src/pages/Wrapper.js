import React from 'react';
import { useTheme, Box, Typography, Paper } from '@mui/material';
import { Outlet } from 'react-router';

export default function Wrapper() {
    const theme = useTheme()

    return (
        <Box sx={{ minWidth: '100%', m: 0, p: 0 }}>
            <Paper elevation={8}
                    sx={{
                        position: "relative",
                        top: 0,
                        backgroundColor: theme.palette.background.paper,
                        padding: 1,
                        display: "flex",
                        width: "100vw",
                        height: "75px"
                    }}>
                <Typography variant='h1' >SPAPPLEFY</Typography>
            </Paper>
            <Outlet />
        </Box>
    )
}