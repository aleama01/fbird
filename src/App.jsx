import React from 'react';
import YourBirds from './pages/yourBirds';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Layout from './pages/layout';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="yourBirds" element={<YourBirds />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
