import React from 'react';
import EventCard from '../../components/EventCard/EventCard.jsx';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './EventPage.css';

const events = [
  {
    date: 'May 22, 1940',
    time: '1:00 AM',
    title: 'Welcome to ADPList',
    location: 'Google Meet',
    host: 'ADPList & Kathy',
    hostImages: ['/path/to/host1.jpg'],
    locationIcon: '/path/to/location/icon.png',
    tag: 'New Mentor Orientation',
    image: '/path/to/event/image.jpg'
  },
  {
    date: 'May 23, 1940',
    time: '4:00 PM',
    gmtTime: '11:00 AM GMT+3',
    title: 'ADPList Meetup | Bucharest',
    location: 'București, București',
    host: 'Raluca Mitrica, Eliza & Dorin Tecuceanu',
    hostImages: ['/path/to/host1.jpg', '/path/to/host2.jpg', '/path/to/host3.jpg'],
    locationIcon: '/path/to/location/icon.png',
    tag: 'Local Meetup',
    image: '/path/to/event/image.jpg'
  },
  {
    date: 'June 1, 1941',
    time: '7:00 PM',
    gmtTime: '12:00 PM GMT+1',
    title: 'ADPList Meetup | Birmingham',
    location: 'Birmingham, England',
    host: 'Samuel Akintunde & Ayomide Apantaku',
    hostImages: ['/path/to/host1.jpg', '/path/to/host2.jpg'],
    locationIcon: '/path/to/location/icon.png',
    tag: 'Local Meetup',
    image: '/path/to/event/image.jpg'
  },
  {
    date: 'June 1, 2000',
    time: '7:00 PM',
    gmtTime: '12:00 PM GMT+1',
    title: 'ADPList Meetup | Birmingham',
    location: 'Birmingham, England',
    host: 'Samuel Akintunde & Ayomide Apantaku',
    hostImages: ['/path/to/host1.jpg', '/path/to/host2.jpg'],
    locationIcon: '/path/to/location/icon.png',
    tag: 'Local Meetup',
    image: '/path/to/event/image.jpg'
  },
  // Add more events as needed
];

const EventPage = () => {
  // Group events by date
  const groupedEvents = events.reduce((acc, event) => {
    if (!acc[event.date]) {
      acc[event.date] = [];
    }
    acc[event.date].push(event);
    return acc;
  }, {});

  return (
    <div className="event-page">
      <h2>Community Meetups</h2>
      <VerticalTimeline animate={true} layout="1-column-left" lineColor="rgb(33, 150, 243)">
        {Object.keys(groupedEvents).map((date, index) => (
          <VerticalTimelineElement
            key={index}
            className="vertical-timeline-element--work"
            date={date}
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff', width: '20px', height: '20px', marginLeft: '-10px', marginTop: '-10px' }}
            position="left"
          >
            {groupedEvents[date].map((event, idx) => (
              <EventCard key={idx} event={event} />
            ))}
          </VerticalTimelineElement>
        ))}
        <VerticalTimelineElement
          iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff', width: '20px', height: '20px', marginLeft: '-10px', marginTop: '-10px' }}
        />
      </VerticalTimeline>
    </div>
  );
};

export default EventPage;
