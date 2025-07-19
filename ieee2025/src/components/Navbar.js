import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import ieeelogo from '../assets/ieeelogo.jpg';

function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <img src={ieeelogo} alt="IEEE Logo" className="logo-img" />
        <span>Electrothon-2025</span>
      </div>

      {/* Desktop Links */}
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/committees">Committees</Link></li>
        <li><Link to="/participants">For Participants</Link></li>
      </ul>

      {/* Mobile Menu Icon */}
      <button className="mobile-menu-icon" onClick={toggleMobileMenu}>
        ☰
      </button>

      {/* Mobile Links */}
      {isMobileMenuOpen && (
        <ul className="nav-links-mobile">
          <li><Link to="/" onClick={toggleMobileMenu}>Home</Link></li>
          <li><Link to="/committees" onClick={toggleMobileMenu}>Committees</Link></li>
          <li><Link to="/participants" onClick={toggleMobileMenu}>For Participants</Link></li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
