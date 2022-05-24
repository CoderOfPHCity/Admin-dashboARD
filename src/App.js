import React from "react";
import "./App.css"
import Topbar from "./components/topbar";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <topbar />
      <h1>
        <Topbar />
        <div className="container">
          <Sidebar />
          <Home />
        </div>
      </h1>
      
    </div>
  );
}


export default App;