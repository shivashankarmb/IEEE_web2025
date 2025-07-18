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
        <h1>WELCOME TO IEEE 2025!</h1>
        <p><strong>IEEE Conference Record:</strong></p>
        <p><strong>IEEE ISBN:</strong></p>
      </section>
    </div>
  );
}

export default Home;
