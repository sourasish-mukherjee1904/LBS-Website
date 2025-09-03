// SportsEventsPage.jsx
import React from "react";
import "./Collection.css"; // reuse same CSS for typography/background

function TechEventsPage() {
  const techEvents = [
    {
      img: "football.jpg",
      title: "Football Tournament",
      description: "Inter-hostel football tournament with knockout rounds and finals under floodlights.",
    },
    {
      img: "cricket.webp",
      title: "Cricket Championship",
      description: "Annual hostel cricket cup with league stages followed by semi-finals and finals.",
    },
    {
      img: "badminton.jpg",
      title: "Badminton Matches",
      description: "Singles and doubles badminton matches in the hostel indoor courts.",
    },
    {
      img: "basketball.webp",
      title: "Basketball League",
      description: "Fast-paced basketball league matches hosted on the hostel court.",
    },
    {
      img: "tabletennis.jpg",
      title: "Table Tennis Tournament",
      description: "Intense table tennis matches in both singles and doubles categories.",
    },
  ];

  return (
    <section id="sports-events" className="collection">
      <div className="container">
        <h2 className="section-title">Tech Events</h2>
        <div className="sports-events-list">
          {techEvents.map((event, index) => (
            <div key={index} className="sports-event">
              <img src={event.img} alt={event.title} className="sports-event-img" />
              <div className="sports-event-info">
                <h3>{event.title}</h3>
                <p>{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TechEventsPage;
