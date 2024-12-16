import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import App from './App';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { ContextProvider } from './context/context';
import theme from './styles/theme';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <ThemeProvider theme={theme}>
    <CssBaseline />
    <ContextProvider>
      <App />
    </ContextProvider>
  </ThemeProvider>

);
