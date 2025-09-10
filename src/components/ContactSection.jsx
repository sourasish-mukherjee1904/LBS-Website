// ContactSection.jsx
import React from "react";
import "./ContactSection.css";

const ContactSection = () => {
  const contacts = [
    {
      title: "Hostel Warden",
      name: "Prof. A. B. Warden",
      phone: "+91 98765 43210",
    },
    {
      title: "Caretaker",
      name: "Mr. C. D. Caretaker",
      phone: "+91 98765 12345",
    },
    {
      title: "Security (24x7)",
      name: "Main Gate Security",
      phone: "+91 98765 67890",
    },
    {
      title: "Medical Emergency",
      name: "B. C. Roy Hospital",
      phone: "03222-282555",
    },
    {
      title: "Fire Emergency",
      name: "Campus Fire Station",
      phone: "101",
    },
    {
      title: "Email Support",
      name: "Hall Office",
      email: "halloffice@iitkgp.ac.in",
    },
    {
      title: "Address",
      name: "LBS Hall of Residence, IIT Kharagpur",
    },
  ];

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2 className="section-title">Contact & Emergency Details</h2>
        <div className="contact-grid">
          {contacts.map((c, idx) => (
            <div key={idx} className="contact-card">
              <h3>{c.title}</h3>
              <p>{c.name}</p>
              {c.phone && (
                <a href={`tel:${c.phone}`} className="contact-link">
                  {c.phone}
                </a>
              )}
              {c.email && (
                <a href={`mailto:${c.email}`} className="contact-link">
                  {c.email}
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
