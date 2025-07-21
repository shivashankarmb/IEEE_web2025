import React from 'react';
import './Footer.css';
import {
  FaPhoneAlt,
  FaEnvelope,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Quick Links */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <a
            href="https://www.google.com/maps/place/BNM+Institute+of+Technology/@12.9219513,77.564949,17z/data=!3m1!4b1!4m6!3m5!1s0x3bae1581f297e32d:0xe9a257cf4383019e!8m2!3d12.9219513!4d77.5671377!16s%2Fm%2F0cr39lq"
            target="_blank"
            rel="noopener noreferrer"
          >
            ➜ Route Map
          </a>
        </div>

        {/* Contact Info */}
        <div className="footer-section">
          <h3>Contact Info</h3>
          <p><FaPhoneAlt /> +91-80-26711781</p>
          <p><FaPhoneAlt /> +91-80-26711782</p>
          <p>
            <FaEnvelope />{' '}
            <a href="mailto:ieee2025bnmit@gmail.com" className="email-link">
              ieee2025bnmit@gmail.com
            </a>
          </p>
          <p>
            <FaEnvelope />{' '}
            <a href="mailto:bnmitprincipal@gmail.com" className="email-link">
              bnmitprincipal@gmail.com
            </a>
          </p>
        </div>

        {/* Follow Us */}
        <div className="footer-section">
          <h3>Follow Us</h3>
          <a
            href="https://www.facebook.com/bnmitsocial"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook /> Facebook
          </a>
          <a
            href="https://x.com/BNMTech"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter /> Twitter
          </a>
          <a
            href="https://www.instagram.com/bnmitsocial/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram /> Instagram
          </a>
          <a
            href="https://www.linkedin.com/school/bnmit/posts/?feedView=all"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin /> LinkedIn
          </a>
        </div>

        {/* Developers */}
        <div className="footer-section">
          <h3>Website developed by</h3>
          <p><span className="highlight">Navya A</span></p>
          <p><span className="highlight">C M Kavana</span></p>
          <p><span className="highlight">V SAISHIVRAM</span></p>
          <p><span className="highlight">ShivaShankara M B</span></p>
          <p>Department Of ISE</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © <span className="highlight">bnmit-ieee</span> | All rights reserved
        </p>
      </div>
    </footer>
  );
}

export default Footer;
