import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './pages/about/About.jsx';
import Alumni from './pages/alumni/Alumni.jsx';
import Home from './pages/home/Home.jsx';
import Footer from './components/footer/Footer';
import Career from './pages/career/Career.jsx';
import News from './pages/news/News.jsx';
import NewsAfter from './pages/news/NewsAfter.jsx';
import Learning from './pages/learning/Learning.jsx';
import Team from './pages/team/Team.jsx';
import Regular from './pages/regular/Regular.jsx';
import "./App.css";
import Msib from './pages/msib/Msib.jsx';

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/learning" element={<Learning />} />
          <Route path="/news" element={<News />} />
          <Route path="/newsafter" element={<NewsAfter />} />
          <Route path="/alumni" element={<Alumni />} />
          <Route path="/about" element={<About />} />
          <Route path="/career" element={<Career />} />
          <Route path="/team" element={<Team />} />
          <Route path="/regular" element={<Regular />} />
          <Route path="/msib" element={<Msib />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
