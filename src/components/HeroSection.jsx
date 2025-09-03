import React from "react";
import "./HeroSection.css"; // make sure path is correct

function HeroSection() {
    const handleScroll = () => {
    const section = document.getElementById("collection");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" }); // smooth scrolling
    }
  };
  return (
    <section id="hero" className="hero">
      <div className="overlay"></div>
      <div className="content">
        <h1 className="heading">LBS HALL OF RESIDENCE</h1>
        <p className="subheading">Indian Institute of Technology Kharagpur</p>
        <button className="cta" onClick={handleScroll}>View Facilities</button>
      </div>
    </section>
  );
}

export default HeroSection;
