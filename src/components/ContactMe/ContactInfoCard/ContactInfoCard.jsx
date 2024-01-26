import React from "react";
import "./ContactInfoCard.css";

const ContactInfoCard = ({ iconUrl, text, href }) => {
  return (
    <div className="contact-details-card">
      <div className="icon">
        <img src={iconUrl} alt={text} />
      </div>

      <a href={href}>{text}</a>
    </div>
  );
};

export default ContactInfoCard;
