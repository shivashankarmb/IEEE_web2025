import React, { useRef } from 'react';
import Slider from 'react-slick';
import './Home.css';

import img1 from '../assets/bnmit-building.jpg';
import img2 from '../assets/BNMIT-S-Building.jpg';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Home() {
  const scrollRef = useRef();

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
  };

  const scrollUp = () => {
    scrollRef.current.scrollBy({ top: -300, behavior: 'smooth' });
  };

  const scrollDown = () => {
    scrollRef.current.scrollBy({ top: 300, behavior: 'smooth' });
  };

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

          <section className="welcome-section">
            <h1>
              WELCOME TO IEEE 2025
            </h1>
            <p>
              <strong>BNMIT IEEE Student Branch</strong> welcomes all participants, mentors, and
              leaders. Explore, innovate, and lead with us toward a smarter future.
            </p>
          </section>
        </div>
      </div>
    
  );
}

export default Home;
