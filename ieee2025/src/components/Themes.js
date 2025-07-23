import React from 'react';
import './Themes.css';

function Themes() {
  return (
    <div className="themes">
      <div className="themes-container">
        <h1 className="page-title">Themes</h1>

        <div className="content-section">
          
          <div className="themes-list">
            <div className="theme-item">
              Environment & Sustainability
            </div>
            <p style={{ fontSize: '1.2rem', color: '#34495e', textAlign: 'center' }}>
            Will be updated soon
          </p>
            
            <div className="theme-item">
              Healthcare
            </div>
            <p style={{ fontSize: '1.2rem', color: '#34495e', textAlign: 'center' }}>
            Will be updated soon
          </p>
            
            <div className="theme-item">
              Robotics and Drones
            </div>
            <p style={{ fontSize: '1.2rem', color: '#34495e', textAlign: 'center' }}>
            Will be updated soon
          </p>
            
            <div className="theme-item">
              Renewable Energy
            </div>
            <p style={{ fontSize: '1.2rem', color: '#34495e', textAlign: 'center' }}>
            Will be updated soon
          </p>
            
            <div className="theme-item">
              Open Innovation
            </div>
            <p style={{ fontSize: '1.2rem', color: '#34495e', textAlign: 'center' }}>
            Will be updated soon
          </p>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Themes;
