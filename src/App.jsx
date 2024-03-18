import React from 'react';
import './App.css';
import { useState, useEffect } from 'react';
import Swr from './Swr';


function App() {
  const [img, setImg] = useState()


  return (
    <div className="App">
      <h1>fBird</h1>
      <h3>fuck shit fuck shit</h3>
      <Swr />
    </div>
  );
}

export default App;
