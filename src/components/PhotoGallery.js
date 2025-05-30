import React, { useState } from "react";
import "./PhotoGallery.css";
import { ChevronLeft, ChevronRight } from "lucide-react";

import photo1 from "../Assests/photo1.jpg";
import photo2 from "../Assests/photo2.jpg";
import photo3 from "../Assests/photo3.jpg";
import photo4 from "../Assests/photo4.jpg";

const images = [photo1, photo2, photo3, photo4];

const PhotoGallery = () => {
  const [index, setIndex] = useState(0);

  const prevSlide = () => setIndex((index - 1 + images.length) % images.length);
  const nextSlide = () => setIndex((index + 1) % images.length);

  return (
    <div className="gallery-container">
      <h2 className="gallery-title">
        <span>Photo</span> Gallery
      </h2>
      <div className="gallery-slider">
        <button className="nav-button left" onClick={prevSlide}>
          <ChevronLeft size={24} />
        </button>
        <div className="gallery-images">
          {images.map((src, i) => (
            <div
              key={i}
              className={`image-container ${
                i === index ? "active" : "inactive"
              }`}
              style={{ backgroundImage: `url(${src})` }}
            ></div>
          ))}
        </div>
        <button className="nav-button right" onClick={nextSlide}>
          <ChevronRight size={24} />
        </button>
      </div>
      <div className="gallery-dots">
        {images.map((_, i) => (
          <span
            key={i}
            className={`dot ${i === index ? "active-dot" : ""}`}
            onClick={() => setIndex(i)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default PhotoGallery;
