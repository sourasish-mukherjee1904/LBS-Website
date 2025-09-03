


// FacilityPage.jsx
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./FacilityPage.css";

function FacilityPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const { title, image, description } = location.state || {};

  return (
    <div className="facility-page">
      {/* Hero section with image + back button */}
      <section
        className="facility-hero"
        style={{
          backgroundImage: image ? `url(${image})` : "none",
          backgroundColor: !image ? "#333" : undefined, // fallback if no image
        }}
      >
        <button className="facility-cta" onClick={() => navigate("/")}>
          ⬅ Back to Home
        </button>
      </section>

      {/* Content section */}
      <div className="facility-content">
        <h1 className="facility-title">{title || "Facility"}</h1>

        {/* Multiline description */}
        {description ? (
          description.split("\n").map((line, i) => (
            <p key={i} className="facility-description">
              {line}
            </p>
          ))
        ) : (
          <p className="facility-description">{description}</p>
        )}
      </div>
    </div>
  );
}

export default FacilityPage;
