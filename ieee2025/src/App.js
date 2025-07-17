import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './components/Home';
import Committees from './components/Committees';
import ForParticipants from './components/For Participants';
// Add others like HomePage if needed

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/committees" element={<Committees />} />
        <Route path="/participants" element={<ForParticipants />} />
        {/* Add more routes like HomePage if used */}
      </Routes>
    </Router>
  );
}

export default App;
