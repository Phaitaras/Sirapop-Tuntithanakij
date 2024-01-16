import React from "react";
import Navbar from './pages/Home/Navbar';
import Home from "./pages/Home/Homescreen";
import './App.css';

function App() {
  return (
    <main className="App">
        <div>
          <Navbar />
          <Home />
        </div>
    </main>
  );
}

export default App;
