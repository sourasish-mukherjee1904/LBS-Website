import React, { useState, useEffect } from "react";
import "./Gallery.css";
// import "./Collection.css";

const images = [
  "gym.jpg",
  "mess.jpg",
  "library.jpg",
  "logo.jpg",
]; // put your hall images inside public/images/

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000); // 4 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="gallery" className="gallery-section">
      <h2 className="section-title">Image Gallery</h2>
      <div className="gallery-slider">
        {images.map((img, index) => (
          <div
            key={index}
            className={`slide ${index === currentIndex ? "active" : ""}`}
            style={{ backgroundImage: `url(${img})` }}
          ></div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
