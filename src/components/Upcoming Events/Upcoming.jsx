import React from 'react';
import './Upcoming.css';
import { MapPin, Calendar, Clock } from 'lucide-react';
import { assets } from '../../assets/assets';

const Upcoming = () => {
  const events = [
    {
      date: "May 22, Wednesday",
      time: "1:00 AM",
      title: "Intrex Day: Welcoming Party",
      club: "Entrepreneurship & Intrapreneurship Club",
      location: "Lecture Theatre 12",
      dateDetail: "Wednesday, 8th May",
      timeDetail: "19:00 - 22:00",
      logo: assets.entrepreneurship,
      tags: ["member-only", "workshop"],
      daysAgo: "1 day ago"
    },
    {
      date: "May 24, Wednesday",
      time: "1:00 AM",
      title: "Intrex Day: Welcoming Party",
      club: "Entrepreneurship & Intrapreneurship Club",
      location: "Lecture Theatre 12",
      dateDetail: "Wednesday, 8th May",
      timeDetail: "19:00 - 22:00",
      logo: assets.entrepreneurship,
      tags: ["public"],
      daysAgo: "1 day ago"
    },
    {
      date: "May 28, Wednesday",
      time: "1:00 AM",
      title: "Intrex Day: Welcoming Party",
      club: "Entrepreneurship & Intrapreneurship Club",
      location: "Lecture Theatre 12",
      dateDetail: "Wednesday, 8th May",
      timeDetail: "19:00 - 22:00",
      logo: assets.entrepreneurship,
      tags: ["member-only", "special-event"],
      daysAgo: "1 day ago"
    },
    // Add more events as needed
  ];

  const groupedEvents = events.reduce((acc, event) => {
    const { date, ...rest } = event;
    if (!acc[date]) acc[date] = { events: [] };
    acc[date].events.push(rest);
    return acc;
  }, {});

  return (
    <div className='upcoming-events'>
      <h2>Upcoming <span className='orange'>Events</span></h2>
      <div className='event-box'>
        <div className="container">
          {Object.entries(groupedEvents).map(([date, { events }]) => (
            <div key={date} className="date-section">
              <div className="date-header">
                <p>{date}</p>
              </div>
              {events.map((event, index) => (
                <div key={index} className="card">
                  <div className="event-details">
                    <div className="title">
                      <h4>{event.title}</h4>
                    </div>
                    <div className="club">
                      <p><span className='orange'>{event.club}</span></p>
                    </div>
                    <div className="location">
                      <MapPin size={16} strokeWidth={2}/>
                      <p>{event.location}</p>
                    </div>
                    <div className="date-time">
                      <Calendar size={16} strokeWidth={2}/>
                      <p>{event.dateDetail}</p>
                      <Clock size={16} strokeWidth={2}/>
                      <p>{event.timeDetail}</p>
                    </div>
                    <div className="tags">
                      {event.tags.map((tag, idx) => (
                        <button key={idx} className="tag-chip">{tag}</button>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Upcoming;
