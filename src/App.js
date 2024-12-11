import * as React from 'react';
import Start from './pages/Start';
import { BrowserRouter, Route, Routes } from 'react-router';
import Wrapper from './pages/Wrapper.js';
function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route element={<Wrapper />}>
          <Route path="/" element={<Start />} /></Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
