import React from 'react';
import { useParams } from 'react-router-dom';
import { clubData } from "../../data/clubDatas.jsx";
import { assets } from '../../assets/assets.js';
import './ClubPage.css'


const ClubPage = () => {
    const { imageKey } = useParams();
    const club = clubData.find(c => c.imageKey === imageKey); // Find the club by imageKey
  
    return (
      <div className='clubpage-details'>
        <img className='club-banner' src={assets.banner} alt="" />
        <h1>{club.title}</h1>
        <img className='club-logo' src={assets[club.imageKey]} alt={club.title} /> {/* Adjusted to use assets directly */}
        <h2>Overview</h2>
        <p>{club.description}</p>
        <div>
          
          <h3>Tags:</h3>
          {club.tags.map((tag, index) => (
            <span key={index} style={{ marginRight: '10px' }}>{tag}</span>
          ))}
        </div>
      </div>
    );
  };
  
  export default ClubPage;
  
