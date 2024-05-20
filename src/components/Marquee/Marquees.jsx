import React from 'react';
import './Marquees.css';
import { assets } from '../../assets/assets';
import Marquee from 'react-fast-marquee';

const clubKeys = Object.keys(assets).slice(42, 78);

const Marquees = () => {
  return (
    <Marquee autoFill={true}>
      {clubKeys.map((key, index) => (
        <div key={index} className="image-wrapper">
          <img src={assets[key]} alt={`${key} logo`} />
        </div>
      ))}
    </Marquee>
  );
};

export default Marquees;
