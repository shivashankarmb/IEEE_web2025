import React from 'react';
import './Footer.css';
import { FaPhoneAlt, FaEnvelope, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Quick Links</h3>
          <a href="#">➜ Route Map</a>
        </div>

        <div className="footer-section">
          <h3>Contact Info</h3>
          <p><FaPhoneAlt /> +91-80-26711781</p>
          <p><FaPhoneAlt /> +91-80-26711782</p>
          <p><FaEnvelope /> ieee2025bnmit@gmail.com</p>
          <p><FaEnvelope /> bnmitprincipal@gmail.com</p>
        </div>

        <div className="footer-section">
          <h3>Follow Us</h3>
          <a href="https://www.facebook.com/bnmitsocial" target="_blank" rel="noopener noreferrer"><FaFacebook /> Facebook</a>
          <a href="https://x.com/BNMTech" target="_blank" rel="noopener noreferrer"><FaTwitter /> Twitter</a>
          <a href="https://www.instagram.com/bnmitsocial/" target="_blank" rel="noopener noreferrer"><FaInstagram /> Instagram</a>
          <a href="https://www.linkedin.com/school/bnmit/posts/?feedView=all" target="_blank" rel="noopener noreferrer"><FaLinkedin /> LinkedIn</a>
        </div>

        <div className="footer-section">
          <h3>Website developed by</h3>
          <p><span className="highlight">SHIVASHANKARA M B</span></p>
          <p><span className="highlight">V SAISHIVRAM</span></p>
          <p>Department Of ISE</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© <span className="highlight">bnmit-ieee</span> | All rights reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
