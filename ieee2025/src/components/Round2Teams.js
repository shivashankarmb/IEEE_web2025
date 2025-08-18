import React from 'react';
import './Round2Teams.css';

function Round2Teams() {
  const registerLink = "https://forms.gle/Um7k7b1yYHhDiije8";

  return (
    <div className="round2-container">
      {/* Title above line */}
      <h2 className="round2-title">2nd Round Registration And Guidelines</h2>

      {/* Divider line */}
      <hr className="divider" />

      {/* Register button */}
      <a href={registerLink} target="_blank" rel="noopener noreferrer">
        <button className="register-btn">Click to REGISTER</button>
      </a>
    </div>
  );
}

export default Round2Teams;
