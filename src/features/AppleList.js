import React from 'react';
import { useTheme, Box, Typography, List, ListItem } from '@mui/material';


export default function AppleList() {
const theme = useTheme()
    return (
        <Box sx={{
            height: "100vh",
            width: "50vw",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: 3,
            margin: 0
        }}>
            <Typography variant="h2" sx={{justifySelf: "flex-start"}}>
                Apple
            </Typography>
            <List sx={{width: "80%", height: "80%",boxShadow: theme.shadows[7], backgroundColor: theme.palette.background.paper}}>
                
            </List>
        </Box>
    )
}