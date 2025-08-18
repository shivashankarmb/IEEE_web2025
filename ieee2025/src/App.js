import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './components/Home';
import Committees from './components/Committees';
import Themes from './components/Themes';
import ForParticipants from './components/For Participants';
import Sponsors from './components/Sponsors';
import Contact from './components/Contact';
import Footer from './components/Footer';
import NotFound from './components/NotFound';
import ScrollToTop from './components/ScrollToTop';

// ✅ Import the new component
import Round2Teams from './components/Round2Teams';

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <Navbar />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/committees" element={<Committees />} />
            <Route path="/themes" element={<Themes />} />
            <Route path="/participants" element={<ForParticipants />} />
            
            {/* ✅ New Route for Round-2 Teams And Guidelines */}
            <Route path="/round2-teams" element={<Round2Teams />} />

            <Route path="/sponsors" element={<Sponsors />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/footer" element={<Footer />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
