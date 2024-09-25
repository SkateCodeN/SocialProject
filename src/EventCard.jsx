import React from "react";
import "./css/framework.css";
import "./css/theme.css";

const EventCard = ({ image, title, description, onSignup }) => {
  return (
    <div className="card card--full-width">
      {/* Event Image */}
      <img src={image} alt={title} className="card__icon" style={{ width: '100%', borderRadius: '3px 3px 0 0' }} />
      
      {/* Event Title */}
      <div className="card__heading align--center">
        <h2>{title}</h2>
      </div>
      
      {/* Event Description */}
      <div className="align--center" style={{ padding: '1rem' }}>
        <p>{description}</p>
      </div>
      
      {/* Sign Up Button */}
      <div className="align--center" style={{ paddingBottom: '1rem' }}>
        <button className="button button--blue" onClick={onSignup}>
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default EventCard;
