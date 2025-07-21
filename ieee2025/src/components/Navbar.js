import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import ieeelogo from '../assets/ieeelogo.jpg';

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <img src={ieeelogo} alt="IEEE Logo" />
        <span>Electrothon-2025</span>
      </div>

      <ul className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
        <li><Link to="/" onClick={toggleMobileMenu}>Home</Link></li>
        <li><Link to="/committees" onClick={toggleMobileMenu}>Committees</Link></li>
        <li><Link to="/themes" onClick={toggleMobileMenu}>Themes</Link></li>
        <li><Link to="/participants" onClick={toggleMobileMenu}>For Participants</Link></li>
        <li><Link to="/sponsors" onClick={toggleMobileMenu}>Sponsors</Link></li>
        <li><Link to="/contact" onClick={toggleMobileMenu}>Contact Us</Link></li>
      </ul>

      <button className="mobile-menu-icon" onClick={toggleMobileMenu}>
        ☰
      </button>
    </nav>
  );
}

export default Navbar;
