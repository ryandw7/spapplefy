import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import App from './App';
import { ThemeProvider, CssBaseline, createTheme } from '@mui/material';
import { AuthProvider } from './context';
const theme = createTheme({
  palette: {
    primary: {
      main: "#1DB954", // Spotify green for primary accents
    },
    secondary: {
      main: "#757575", // Subtle gray for secondary elements
    },
    background: {
      default: "#F5F5F7", // Apple-style light gray background
      paper: "#FFFFFF", // Clean white for cards and surfaces
    },
    text: {
      primary: "#000000", // Bold black for text
      secondary: "#5E5E5E", // Subtle gray for secondary text
    },
  },
  typography: {
    fontFamily: "'San Francisco', 'Helvetica Neue', 'Arial', sans-serif", // Apple's typography
    h1: {
      fontSize: "3rem",
      fontWeight: 700,
      color: "#1DB954", // Spotify green for large headers
    },
    h2: {
      fontSize: "2rem",
      fontWeight: 600,
      color: "#1DB954",
    },
    body1: {
      fontSize: "1rem",
      lineHeight: 1.6,
      color: "#000000", // Clean black for readable body text
    },
    button: {
      textTransform: "none", // Apple's clean button style (no uppercase)
    },
  },
  components: {
    Container: {
      p: 0
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "24px", // Rounded buttons like Spotify's
          p: 0,
          fontSize: "1rem",
        },
        containedPrimary: {
          backgroundColor: "#1DB954", // Spotify green
          color: "#FFFFFF",
          "&:hover": {
            backgroundColor: "#1AA34A", // Slightly darker green  
          },
        },
      },
    },
  },
  MuiContainer: {
    styleOverrides: {
      root: {
        padding: 0,
      }
    }
  }
});
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <ThemeProvider theme={theme}>
    <CssBaseline />
    <AuthProvider>
      <App />
    </AuthProvider>
  </ThemeProvider>

);
