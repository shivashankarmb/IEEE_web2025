import React from 'react';
import './Themes.css';

function Themes() {
  return (
    <div className="themes">
      <div className="themes-container">
        <h1 className="page-title">Themes</h1>

        <div className="content-section">
          <div className="important-note">
            <strong>IMPORTANT NOTE:</strong> The Sub-topics are just an example. The participants can come up with own ideas which comes under these themes.
          </div>
          
          <div className="themes-list">
            {/* Environment & Sustainability */}
            <div className="theme-item">
               Theme 1 Environment & Sustainability
            </div>
            <div className="theme-content">
              <ul className="theme-bullets">
                <li>Smart Composting Bin with Gas Emission Sensors</li>
                <li>e-Waste Sorting Device</li>
                <li>Carbon Footprint Tracker Using Sensor-Integrated Tag</li>
                <li>Biodegradable Micro-Sensor Networks for Soil Health</li>
              </ul>
            </div>
            
            {/* Healthcare */}
            <div className="theme-item">
              Theme 2 Healthcare
            </div>
            <div className="theme-content">
              <ul className="theme-bullets">
                <li>Wearable Multi-Parametric Diagnostic Patches</li>
                <li>Feedback Devices for Post-Stroke Rehabilitation and Motor Skill Recovery</li>
                <li>Elevating Elderly Care</li>
                <li>Revolutionizing Remote Healthcare</li>
                <li>Faster Response in Emergencies</li>
                <li>Smart Posture Corrector</li>
                <li>Low-Cost ECG Monitoring with Bluetooth Connectivity</li>
              </ul>
            </div>
            
            {/* Robotics and Drones */}
            <div className="theme-item">
              Theme 3 Robotics and Drones
            </div>
            <div className="theme-content">
              <ul className="theme-bullets">
                <li>Modular, Reconfigurable Robotics for Disaster Response</li>
                <li>Drone for Autonomous Crop Health Monitoring and Precision Spraying</li>
                <li>Autonomous Drone-Based 3D Printing</li>
              </ul>
            </div>
            
            {/* Renewable Energy */}
            <div className="theme-item">
              Theme 4 Renewable Energy
            </div>
            <div className="theme-content">
              <ul className="theme-bullets">
                <li>Off-Grid Energy Harvesters for Remote IoT Devices</li>
                <li>Smart Energy Management System</li>
                <li>Portable, Deployable Vertical Axis Wind Turbine (VAWT) for Urban/Emergency Use</li>
                <li>Community-Scale Hybrid Energy Storage Systems</li>
                <li>Hybrid Solar-Thermal Cooker</li>
                <li>Portable Non-conventional Generators</li>
              </ul>
            </div>
            
            {/* Open Innovation */}
            <div className="theme-item">
              Open Innovation
            </div>
            <div className="theme-content">
              <p className="open-innovation-text">
                Any ideas other than the above mentioned themes can be under open innovation track
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Themes;
