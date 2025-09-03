import React, { useState, useEffect } from "react";
import "./Header.css";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSmoothScroll = (e, id) => {
    e.preventDefault();
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false); // close menu after click (on mobile)
  };

  return (
    <header className={`site-header ${scrolled ? "scrolled" : ""}`}>
      <div className="logo">LBS HALL</div>

      {/* Hamburger Button */}
      <div
        className={`hamburger ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Navigation Links */}
      <nav className={`nav-links ${menuOpen ? "active" : ""}`}>
        <a href="#hero" onClick={(e) => handleSmoothScroll(e, "hero")}>Home</a>
        <a href="#words" onClick={(e) => handleSmoothScroll(e, "words-carousel")}>Words</a>
        <a href="#facilities" onClick={(e) => handleSmoothScroll(e, "collection")}>Facilities</a>
        <a href="#events" onClick={(e) => handleSmoothScroll(e, "events")}>Events</a>
        <a href="#contact" onClick={(e) => handleSmoothScroll(e, "contact")}>Contact</a>
      </nav>
    </header>
  );
};

export default Header;
