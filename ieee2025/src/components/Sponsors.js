import React from 'react';
import './Sponsors.css';
import ieePesLogo from '../assets/ieeelogo.jpg';
import propureLogo from '../assets/Propure Technologies_Logo.jpg';

const Sponsors = () => {
  return (
    <div className="sponsors">
      <div className="sponsors-container">
        <h1 className="sponsors-title">Sponsors</h1>
        <div className="sponsors-logos">
          <div className="sponsor-card">
            <div className="sponsor-image">
              <img src={ieePesLogo} alt="IEEE PES Company" />
            </div>
            <p className="sponsor-name">IEEE PES Power & Energy Society</p>
          </div>
          <div className="sponsor-card">
            <div className="sponsor-image">
              <img src={propureLogo} alt="Propure Technologies" />
            </div>
            <p className="sponsor-name">Propure Technologies</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
