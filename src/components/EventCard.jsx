// import React from "react";
// import { useNavigate } from "react-router-dom";

// function EventCard({ imgSrc, title, description }) {
//   const navigate = useNavigate();

//   const handleClick = () => {
//     navigate("/sports-events"); // or different pages if you want
//   };

//   return (
//     <div className="event-card" onClick={handleClick}>
//       <img src={imgSrc} alt={title} />
//       <div className="event-info">
//         <h3>{title}</h3>
//         <p>{description}</p>
//       </div>
//     </div>
//   );
// }

// export default EventCard;
import React from "react";
import { useNavigate } from "react-router-dom";

function EventCard({ imgSrc, title, description }) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (title === "SPORTS") {
      navigate("/sports-events");
    } else if (title === "CULTURAL") {
      navigate("/cultural-events");
    } else if (title === "TECHNICAL") {
      navigate("/tech-events");
    } else {
      navigate("/events"); // fallback if none match
    }
  };

  return (
    <div className="event-card" onClick={handleClick}>
      <img src={imgSrc} alt={title} />
      <div className="event-info">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default EventCard;
