import React from 'react';
import './EventCard.css';

const EventCard = ({ event }) => {
  return (
    <div className="event-card">
      <div className="event-details">
        <div className="event-time">
          <span>{event.localTime}</span>
          <span>{event.gmtTime}</span>
        </div>
        <div className="event-title">{event.title}</div>
        <div className="event-hosts">
          <img src={event.hostImage} alt="Host" />
          By {event.host}
        </div>
        <div className="event-location">
          <img src={event.locationIcon} alt="Location" />
          {event.location}
        </div>
        <div className="event-tag">{event.tag}</div>
      </div>
      <div className="event-image">
        <img src={event.image} alt="Event" />
      </div>
    </div>
  );
};

export default EventCard;
