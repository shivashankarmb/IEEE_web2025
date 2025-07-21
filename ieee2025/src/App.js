import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './components/Home';
import Committees from './components/Committees';
import ForParticipants from './components/For Participants';
import Footer from './components/Footer';
import NotFound from './components/NotFound';


import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/committees" element={<Committees />} />
            <Route path="/participants" element={<ForParticipants />} />
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
