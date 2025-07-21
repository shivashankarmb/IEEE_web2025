import React from 'react';
import './For Participants.css';

function ForParticipants() {
  return (
    <div className="participants">
      <div className="participants-container">
        <h1 className="page-title">For Participants</h1>

        <div className="content-section">
          <h2 className="section-title">Poster IEEE Electrothon-2025</h2>
          <div className="button-wrapper">
            <a 
              href=" https://raw.githubusercontent.com/shivashankarmb/IEEE_web2025/main/ieee2025/public/poster.pdf" 
              className="action-button" 
              target="_blank" 
              rel="noopener noreferrer"
              download
            >
              Download Poster
            </a>
          </div>
        </div>

        <div className="content-section">
          <h2 className="section-title">Registration Link for IEEE Electrothon-2025</h2>
          <div className="button-wrapper">
            <a 
              href="https://docs.google.com/forms/d/15uRKUb0ZzfKYWFJhVHmIdLjJvOQXgXnzMX3AEnB3u-g/edit?pli=1" 
              className="action-button" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Click Here to Register
            </a>
          </div>
        </div>

        <div className="content-section">
          <h2 className="section-title">Abstract Submission for IEEE Electrothon-2025</h2>
          <div className="button-wrapper">
            <a 
              href="https://docs.google.com/document/d/1ojqF92N3CXGRNmXVpcasnNpNZsicgxHZ/edit" 
              className="action-button" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Abstract Template
            </a>
          </div>
        </div>

        <div className="content-section">
          <h2 className="section-title">Presentation Schedule for IEEE 2025</h2>
          <p>Will be updated soon</p>
        </div>
      </div>
    </div>
  );
}

export default ForParticipants;
