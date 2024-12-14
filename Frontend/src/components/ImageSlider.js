import React, { useState, useEffect } from 'react';
import './ImageSlider.css';
import pongdam from "../images/pongdam_03.png";
import pongdam2 from "../images/pongdam-02.png";
import pongdam3 from "../images/pongdam_flood_latest_16aug2023.png";

const images = [
  pongdam2,
  pongdam,
  pongdam3
];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNextSlide();
    }, 5000); // 5 seconds for better user experience

    return () => clearInterval(interval);
  }, []);

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
    <div className="slider-container">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div
            className="slide"
            key={index}
          >
            <img src={image} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>
      <button className="prev" onClick={handlePrevSlide}>&#10094;</button>
      <button className="next" onClick={handleNextSlide}>&#10095;</button>
    </div>
  );
};

export default ImageSlider;