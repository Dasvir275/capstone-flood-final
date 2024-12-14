import React, { useState, useEffect, useRef } from 'react';
import './ImageSlider.css';
import flood2 from "../images/patiala1.jpeg";
import flood3 from "../images/patiala2.jpeg";
import flood4 from "../images/bhakra.png";
import flood5 from "../images/polavaram.jpeg";
import flood6 from "../images/kulumanali01.jpeg";
import flood7 from "../images/kulumanali02.jpeg";
import flood8 from "../images/pongdam-02.png";
import flood9 from "../images/pongdam_03.png";
import flood10 from "../images/pongdam_flood_latest_16aug2023.png";

const images = [
  flood2,
  flood3,
  flood4,
  flood5,
  flood6,
  flood7,
  flood8,
  flood9,
  flood10,
];

const Mainslider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    startAutoScroll();
    return () => stopAutoScroll();
  }, [currentIndex]);

  const startAutoScroll = () => {
    timeoutRef.current = setTimeout(() => {
      handleNextSlide();
    }, 2000); // Adjust the speed as necessary
  };

  const stopAutoScroll = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  const handleNextSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
      setTimeout(() => setIsAnimating(false), 600); // Match with the CSS transition duration
    }
  };

  const handlePrevSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
      setTimeout(() => setIsAnimating(false), 600);
    }
  };

  return (
    <div
      className="slider-container"
      onMouseEnter={stopAutoScroll} // Pause when hovering over the slider
      onMouseLeave={startAutoScroll} // Resume when mouse leaves
    >
      <div
        className="slider"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
          transition: isAnimating ? "transform 0.6s ease-in-out" : "none",
        }}
      >
        {images.map((image, index) => (
          <div className="slide fade" key={index}>
            <img src={image} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>
      <button className="prev" onClick={handlePrevSlide}>&#10094;</button>
      <button className="next" onClick={handleNextSlide}>&#10095;</button>
    </div>
  );
};

export default Mainslider;


