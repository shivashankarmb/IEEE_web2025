import React, { useRef } from 'react';
import Slider from 'react-slick';
import './Home.css';

import img1 from '../assets/bnmit-building.jpg';
import img2 from '../assets/BNMIT-S-Building.jpg';
import img3 from '../assets/bnmitlogo.jpg';         // BNMIT logo
import ieeelogo from '../assets/ieeelogo.jpg';
import img4 from '../assets/bnmitieeelogo.jpg';     // IEEE logo
import img5 from '../assets/Audi Block BNMITbuilding Photo.jpg'; // Audi Block BNMIT Building
import img6 from '../assets/Auditorium_APjSir event photo.png'; // S Building BNMIT

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Home() {
  const scrollRef = useRef();

  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    arrows: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="scrollable-content" ref={scrollRef}>
      <div className="home">
        {/* Image Slider */}
        <div className="multi-carousel-wrapper">
          <Slider {...settings}>
            <div>
              <img src={img1} alt="BNMIT Building" className="multi-carousel-img" />
            </div>
            <div>
              <img src={img2} alt="BNMIT S Building" className="multi-carousel-img" />
            </div>
            <div>
              <img src={img5} alt="BNMIT Audi Building" className="multi-carousel-img" />
            </div>
            <div>
              <img src={img6} alt="BNMIT S Building" className="multi-carousel-img" />
            </div>
          </Slider>
        </div>

        {/* Welcome Section with Logos and Text */}
        <section className="welcome-section">
          <div className="welcome-logos">
            {/* Left Logo + BNMIT Link */}
            {/* Left Logo + BNMIT Link */}
            <div className="logo-with-label">
              <img src={img3} alt="BNMIT Logo" className="side-logo" />
              <a
                href="https://www.bnmit.org/"
                className="ieee-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit BNMIT →
              </a>
            </div>

            {/* Center Text + BNMIT IEEE PES Logo */}
            {/* Center Text + BNMIT IEEE PES Logo */}
            <div className="welcome-text">
              <h1>Welcome to BNMIT IEEE PES Hardware Hackathon– <br />Electrothon 2025</h1>
              <img
                src={img4}
                alt="BNMIT IEEE PES Logo"
                className="center-logo-small"
              />
            </div>

            {/* Right Logo + IEEE PES Link */}
            <div className="logo-with-label">
              <img src={ieeelogo} alt="IEEE Logo" className="side-logo" />
              <a
                href="https://r10.ieee.org/bangalore-pes/"
                className="ieee-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit IEEE PES Bangalore Chapter →
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home;