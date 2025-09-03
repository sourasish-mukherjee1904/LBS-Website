import React, { useState, useEffect } from "react";
import "./WordsCarousel.css";

const wordsList = [
  {
    name: "Director",
    img: "director.jpg",
    message: "Welcome to LBS Hall of Residence, a place of growth and excellence.",
  },
  {
    name: "Warden",
    img: "director.jpg",
    message: "Discipline and harmony are the pillars of our hall.",
  },
  {
    name: "Assistant Warden",
    img: "director.jpg",
    message: "We are here to support your journey in every possible way.",
  },
  {
    name: "Hall President",
    img: "director.jpg",
    message: "Together, let’s make LBS Hall vibrant and full of life.",
  },
];

const WordsCarousel = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % wordsList.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => setIndex((prev) => (prev + 1) % wordsList.length);
  const prevSlide = () =>
    setIndex((prev) => (prev - 1 + wordsList.length) % wordsList.length);

  return (
    <section id="words-carousel" className="words-carousel">
      <div
        className="carousel-track"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {wordsList.map((person, i) => (
          <div className="carousel-card" key={i}>
            <img src={person.img} alt={person.name} className="person-img" />
            <p className="message">"{person.message}"</p>
            <h3 className="name">— {person.name}</h3>
          </div>
        ))}
      </div>

      <div className="controls">
        <button onClick={prevSlide}>&lt;</button>
        <button onClick={nextSlide}>&gt;</button>
      </div>
    </section>
  );
};

export default WordsCarousel;
