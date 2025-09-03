

// export default MarbleCard;

import React from "react";
import { useNavigate } from "react-router-dom";

function MarbleCard({ imgSrc, title, description }) {
  const navigate = useNavigate();

  const handleClick = () => {
    // Navigate to FacilityPage with state (props)
    navigate("/facility", {
      state: { title, description, image: imgSrc },
    });
  };

  return (
    <div className="marble-card" onClick={handleClick} style={{ cursor: "pointer" }}>
      <img src={imgSrc} alt={title} />
      <div className="marble-info">
        <h3>{title}</h3>
        {/* <p>{description}</p> */}
      </div>
    </div>
  );
}

export default MarbleCard;


// MarbleCard.jsx
// import React from "react";
// import { useNavigate } from "react-router-dom";
// import FacilityPage from "./FacilityPage";

// function MarbleCard({ imgSrc, title, description }) {
//   const navigate = useNavigate();

//   const handleClick = () => {
//     navigate("/facility", {
//       state: { title, image: imgSrc, description },
//     });
//   };

//   return (
//     <div className="marble-card" onClick={handleClick} style={{ cursor: "pointer" }}>
//       <img src={imgSrc} alt={title} />
//       <div className="marble-info">
//         <h3>{title}</h3>
//         <p>{description}</p>
//       </div>
//     </div>
//   );
// }

// export default MarbleCard;
