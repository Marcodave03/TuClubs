import React, { useRef } from 'react';
import './Home.css';
import Header from '../../components/Header/Header.jsx';
import Marquees from '../../components/Marquee/Marquees.jsx';
import Upcoming from '../../components/Upcoming Events/Upcoming.jsx';
import Discover from '../../components/Discover/Discover.jsx';

const Home = () => {
  const upcomingRef = useRef(null); // Create the ref here for Upcoming

  const scrollToUpcoming = () => {
    upcomingRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
        <Header onExploreClick={scrollToUpcoming}/> 
        <Marquees/>
        <div ref={upcomingRef}><Upcoming/></div> 
        <Discover/>
    </div>
  );
};

export default Home;
