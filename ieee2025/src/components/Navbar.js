import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src="/iitcee-logo.png" alt="IITCEE Logo" />
        <span>IITCEE 2026, Jan 22–23</span>
      </div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/committees">Committees</Link></li>
        <li><Link to="/participants">For Participants</Link></li>
        {/* Add more links here */}
      </ul>
    </nav>
  );
}

export default Navbar;
