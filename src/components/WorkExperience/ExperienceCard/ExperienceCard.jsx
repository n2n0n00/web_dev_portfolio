import React from "react";
import "./ExperienceCard.css";

const ExperienceCard = ({ details }) => {
  return (
    <div className="work-experience-card">
      <div className="work-titles">
        <a href={details.href}>{details.title}</a>

        <div className="work-outwardLink">
          <a href={details.outwardLink} className="">
            Live Site
          </a>{" "}
          <a href={details.href} className="">
            GitHub
          </a>
        </div>
      </div>

      <div className="work-duration">{details.date}</div>

      <div className="work-image">
        <img src={details.src} alt={details.title} />
      </div>

      <ul>
        {details.responsibilities.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default ExperienceCard;
