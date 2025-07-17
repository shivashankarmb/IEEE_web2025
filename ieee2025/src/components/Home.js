import React from 'react';
import './HomePage.css';

function HomePage() {
  return (
    <div className="homepage">
      <div className="banner">
        <img src="/bnmit-building.jpg" alt="BNMIT Building" />
      </div>
      <div className="welcome-text">
        <h1>WELCOME TO <span>IITCEE 2026!</span></h1>
        <p><strong>IEEE Conference Record:</strong> 67948</p>
        <p><strong>IEEE ISBN:</strong> <a href="#">979-8-3315-7746-9</a></p>
      </div>
    </div>
  );
}

export default HomePage;
