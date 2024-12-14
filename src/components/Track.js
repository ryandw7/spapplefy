import React from 'react';
import { ListItem, ListItemAvatar, ListItemText, Avatar, Typography, IconButton, useTheme } from '@mui/material';

export default function Track({track, index}){
const theme = useTheme()
    return (
        <ListItem
          key={index}
          sx={{
            display: 'flex',
            alignItems: 'center',
            padding: 2,
            '&:hover': { bgcolor: 'grey.100' },
            backgroundColor : theme.palette.background.paper,
            margin: "5px auto",
            width: "90%",
            maxWidth: "90%",
            minWidth: "90%",
            boxShadow: theme.shadows[7]
          }}
        >
          
          <ListItemAvatar>
            <Avatar
              variant="rounded"
              src={track.image}
              alt={track.album}
              sx={{ width: 56, height: 56, marginRight: 2 }}
            />
          </ListItemAvatar>
          <ListItemText
            primary={
              <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                {track.title}
              </Typography>
            }
            secondary={
              <Typography variant="body2" color="text.secondary">
                {track.artist} - {track.album}
              </Typography>
            }
          />
          <IconButton edge="end" aria-label="play">
        
          </IconButton>
          
        </ListItem>
    )
}