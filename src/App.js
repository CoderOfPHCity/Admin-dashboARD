import React from "react";
import './App.css';

import About from './Component/About'
import Experience from './Component/Experience'
import Education from './Component/Education'

import  pic from './pic.jpg'
function App() {
  return (
    <div className="App">
      <img src= {pic} alt = 'hdjgtdj' className="imm" />
        <About></About >
        <Experience></Experience>
        <Education></Education>
    </div>
  );
}


export default App;

