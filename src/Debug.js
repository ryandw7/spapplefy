import React from 'react';
import { List, ListItem, ListItemText, Paper } from '@mui/material';

const DebugSelectedList = () => {
  return (
    <Paper elevation={3} sx={{ padding: 2 }}>
      <List>
        <ListItem
          selected={true}
          sx={{
            '&.Mui-selected': {
              bgcolor: 'grey.200',
              fontWeight: 'bold',
              border: '2px solid red', // For visibility
              borderRadius: '8px',
            },
          }}
        >
          <ListItemText primary="Selected Item" />
        </ListItem>
      </List>
    </Paper>
  );
};

export default DebugSelectedList;