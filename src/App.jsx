import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/header/Navbar.jsx';
import About from './pages/about/About.jsx';
import Home from './pages/home/Home.jsx';
import Footer from './components/footer/Footer';
import Career from './pages/career/Career.jsx';
import "./App.css";
import Team from './pages/team/Team.jsx';

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/career" element={<Career />} />
          <Route path="/team" element={<Team />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
