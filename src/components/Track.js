import React from 'react';

export default function Track({track}){

    return (
        <ListItem
          key={index}
          sx={{
            display: 'flex',
            alignItems: 'center',
            padding: 2,
            '&:hover': { bgcolor: 'grey.100' }
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
            <PlayArrowIcon />
          </IconButton>
        </ListItem>
    )
}