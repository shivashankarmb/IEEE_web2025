import React, { useRef } from 'react';
import Slider from 'react-slick';
import './Home.css';

import img1 from '../assets/bnmit-building.jpg';
import img2 from '../assets/BNMIT-S-Building.jpg';
import img3 from '../assets/bnmitlogo.jpg';         // BNMIT logo
import img4 from '../assets/bnmitieeelogo.jpg';     // IEEE logo

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
          </Slider>
        </div>

        {/* Welcome Section with Logos and Text */}
        <section className="welcome-section">
          <div className="welcome-logos">
            <div className="logo-with-label">
              <img src={img3} alt="BNMIT Logo" className="side-logo" />
              <p className="logo-label">BNMIT Chapter</p>
            </div>

            <div className="welcome-text">
              <h1>Welcome to BNMIT IEEE PES Hardware Hackathon–Electrothon 2025</h1>
              
              <a
                href="https://r10.ieee.org/bangalore-pes/"
                className="ieee-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit IEEE PES Bangalore Chapter →
              </a>
            </div>

            <div className="logo-with-label">
              <img src={img4} alt="IEEE Logo" className="side-logo" />
              <p className="logo-label">BNMIT IEEE PES Student Chapter</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home;
