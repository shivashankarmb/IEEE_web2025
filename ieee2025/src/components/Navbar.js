import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import ieeelogo from '../assets/ieeelogo.jpg'; // Make sure the path and filename are correct

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={ieeelogo} alt="IEEE Logo" className="logo-img" />
        <span>Electrothon-2025</span>
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
