import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from './components/Home/Home'; 
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Help from "./components/Help/Help";
import Login from "./components/Login/Login";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Header />
          <Routes>

            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/help" element={<Help />} />
            <Route path="/login" element={<Login />} />
           
          </Routes>
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
