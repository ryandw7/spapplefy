import * as React from 'react';
import Button from '@mui/material/Button';
import Start from './pages/Start';
import { BrowserRouter, Route, Routes } from 'react-router';
function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Start />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
