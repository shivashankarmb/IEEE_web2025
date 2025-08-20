import React, { useRef } from 'react';
import Slider from 'react-slick';
import './Home.css';

import img1 from '../assets/bnmit-building.webp';
import img2 from '../assets/BNMIT-S-Building.webp';
import img3 from '../assets/bnmitlogo.jpg';
import ieeelogo from '../assets/ieeelogo.jpg';
import img4 from '../assets/bnmitieeelogo.jpg';
import img5 from '../assets/Audi Block BNMITbuilding Photo.webp';
import img6 from '../assets/Auditorium_APjSir event photo.webp';

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
        settings: { slidesToShow: 1 },
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
              <img src={img1} alt="BNMIT Building" loading="lazy" className="multi-carousel-img" />
            </div>
            <div>
              <img src={img2} alt="BNMIT S Building" loading="lazy" className="multi-carousel-img" />
            </div>
            <div>
              <img src={img5} alt="BNMIT Audi Building" loading="lazy" className="multi-carousel-img" />
            </div>
            <div>
              <img src={img6} alt="BNMIT S Building" loading="lazy" className="multi-carousel-img" />
            </div>
          </Slider>
        </div>

        {/* Scrolling Registration Deadline Message */}
        <div className="registration-marquee">
          <span className="scroll-text">
            📢 22 August is the last date to register for 2nd Round
          </span>
        </div>

        {/* Welcome Section */}
        <section className="welcome-section">
          <div className="welcome-logos">
            {/* Left Logo */}
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

            {/* Center Text */}
            <div className="welcome-text">
              <h1>Welcome to BNMIT IEEE PES Hardware Hackathon– <br />Electrothon 2025</h1>
              <img
                src={img4}
                alt="BNMIT IEEE PES Logo"
                className="center-logo-small"
              />
            </div>

            {/* Right Logo */}
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
