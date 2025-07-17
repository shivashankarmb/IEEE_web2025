import React from 'react';
import './For Participants.css';

function ForParticipants() {
  return (
    <div className="participants">
      <div className="participants-container">
        <h1 className="page-title">For Participants</h1>
        
        <div className="content-section">
          <h2 className="section-title">
            The registration form link for IEEE Conference
          </h2>
          <button className="action-button">Click here for registerting</button>
        </div>

        <div className="content-section">
          <h2 className="section-title">
            Presentation Schedule for IEEE 2025:
          </h2>
          <button className="action-button">Download Presentation Schedule</button>
        </div>

        <div className="content-section">
          <h2 className="section-title">
            Presentation Template for ICIITCEE 2025:
          </h2>
          <p className="notice">
            *Important Notice for Presenters: All participants are required to use the official PowerPoint Template for their presentations at the IEEE International Conference*
          </p>
          <button className="action-button">Download Presentation Template</button>
        </div>

        <div className="content-section">
          <h2 className="section-title">
            <span className="icon"></span>
            Presentation Guidelines:
          </h2>
          <ul className="guidelines-list">
            <li>Slide Limit: Maximum of 8 to 10 slides.</li>
          </ul>
        </div>

        <div className="content-section">
          <h2 className="section-title">
            Content Focus:
          </h2>
          <ul className="content-list">
            <li>Focus on key findings and contributions</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ForParticipants;
