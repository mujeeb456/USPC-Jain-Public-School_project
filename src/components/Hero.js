// src/components/Hero.js
import React, { useState, useEffect } from "react";
import "./Hero.css";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Import your hero images
import heroBg1 from "../Assests/hero.jpg";
import heroBg2 from "../Assests/hero2.jpg";
import heroBg3 from "../Assests/hero4.jpg";
import heroBg4 from "../Assests/hero5.jpg";
import heroBg5 from "../Assests/hero3.jpg"

const heroImages = [heroBg1, heroBg2, heroBg3, heroBg4, heroBg5];

function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextSlide = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
  };

  const prevSlide = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + heroImages.length) % heroImages.length
    );
  };

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="hero"
      style={{ backgroundImage: `url(${heroImages[currentImageIndex]})` }}
    >
      <div className="hero-content">
        <h1>Welcome to USPC Jain Public School</h1>
        <p>“Striving for Excellence in Education”</p>
      </div>

      {/* Navigation arrows */}
      <button className="hero-nav-button left" onClick={prevSlide}>
        <ChevronLeft size={32} />
      </button>
      <button className="hero-nav-button right" onClick={nextSlide}>
        <ChevronRight size={32} />
      </button>

      {/* Optional dots indicator */}
      <div className="hero-dots">
        {heroImages.map((_, index) => (
          <span
            key={index}
            className={`hero-dot ${
              index === currentImageIndex ? "active" : ""
            }`}
            onClick={() => setCurrentImageIndex(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default Hero;
