// CollectionSection.jsx
import React from "react";
import MarbleCard from "./MarbleCard";
import "./Collection.css"; // <-- keep your CSS in this file

function CollectionSection() {
  const marbles = [
    {
        img: "mess.jpg",
        title: "HOSTEL MESS",
        description: "Do you want me to show you how to completely remove the overlay div from JSX, or adjust the CSS so you still keep text readability with a lighter tint?",
    },
    {
        img: "basketball_court.jpg",
        title: "BASKETBALL COURT",
        description: "Do you want me to show you how to completely remove the overlay div from JSX, or adjust the CSS so you still keep text readability with a lighter tint?",
    },
    {
        img: "badminton_court.jpg",
        title: "BADMINTON COURT",
        description: "Do you want me to show you how to completely remove the overlay div from JSX, or adjust the CSS so you still keep text readability with a lighter tint?",
    },
    {
        img: "cricket_net.jpeg",
        title: "CRICKET NET",
        description: "Do you want me to show you how to completely remove the overlay div from JSX, or adjust the CSS so you still keep text readability with a lighter tint?",
    },
    {
        img: "tt.jpg",
        title: "TABLE TENNIS",
        description: "Do you want me to show you how to completely remove the overlay div from JSX, or adjust the CSS so you still keep text readability with a lighter tint?",
    },
    {
        img: "gym.jpg",
        title: "GYM",
        description: "Do you want me to show you how to completely remove the overlay div from JSX, or adjust the CSS so you still keep text readability with a lighter tint?",
    },
    {
        img: "library.jpg",
        title: "LIBRARY",
        description: "Do you want me to show you how to completely remove the overlay div from JSX, or adjust the CSS so you still keep text readability with a lighter tint?",
    },
    {
        img: "music_room.jpeg",
        title: "MUSIC ROOM",
        description: "Do you want me to show you how to completely remove the overlay div from JSX, or adjust the CSS so you still keep text readability with a lighter tint?",
    },
    {
        img: "visitors_room.jpeg",
        title: "VISITORS ROOM",
        description: "Do you want me to show you how to completely remove the overlay div from JSX, or adjust the CSS so you still keep text readability with a lighter tint?",
    },

  ];

  return (
    <section id="collection" className="collection">
      <div className="container">
        <h2 className="section-title">Hostle Facilities</h2>
        <div className="marble-grid">
          {marbles.map((marble, index) => (
            <MarbleCard
              key={index}
              imgSrc={marble.img}
              title={marble.title}
              description={marble.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default CollectionSection;