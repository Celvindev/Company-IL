import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/header/Navbar.jsx';
import About from './pages/about/About.jsx';
import Home from './pages/home/Home.jsx'; 
import Footer from './components/footer/Footer';
import "./App.css";
import Career from './pages/career/Career.jsx';

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/career" element={<Career />} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
