import React from 'react';
import './Home.css';
import banner from '../assets/bnmit-building.jpg'; // Update the path if needed

function Home() {
  return (
    <div className="home scroll-container">
      <div className="banner-container">
        <img src={banner} alt="BNMIT Building" className="banner-img" />
      </div>
      <section className="welcome-section">
        <h1>WELCOME TO <span className="highlight">IITCEE 2026!</span></h1>
        <p><strong>IEEE Conference Record:</strong> <span className="highlight">67948</span></p>
        <p><strong>IEEE ISBN:</strong> <span className="highlight">979-8-3315-7746-9</span></p>
      </section>
    </div>
  );
}

export default Home;
