// EventSection.jsx
import React from "react";
import EventCard from "./EventCard";
import "./Collection.css"; // reuse your CSS

function EventSection() {
  const events = [
    {
      img: "mess.jpg",
      title: "SPORTS",
      description: "All upcoming sports events and competitions.",
    },
    {
      img: "basketball_court.jpg",
      title: "CULTURAL",
      description: "Cultural fests, music, dance and more.",
    },
    {
      img: "badminton_court.jpg",
      title: "TECHNICAL",
      description: "Hackathons, workshops, and technical contests.",
    },
  ];

  return (
    <section id="events" className="collection">
      <div className="container">
        <h2 className="section-title">Events</h2>
        <div className="marble-grid">
          {events.map((event, index) => (
            <EventCard
              key={index}
              imgSrc={event.img}
              title={event.title}
              description={event.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default EventSection;
