import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Navbar from './pages/Home/Navbar';
import Home from "./pages/Home/Homescreen";
import './App.css';

function App() {
  return (
    <main className="App">
      <Router>
        <div>
          <Navbar />
          <Home />
          {/* <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="*" element={<div>404 Not Found</div>}></Route>
          </Routes> */}
        </div>
      </Router>
    </main>
  );
}

export default App;
