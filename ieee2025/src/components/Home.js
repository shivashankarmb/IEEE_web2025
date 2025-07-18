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
        <h1>WELCOME TO <span className="highlight">IEEE 2025!</span></h1>
      </section>
    </div>
  );
}

export default Home;
