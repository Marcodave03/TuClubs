import React from "react";
import "./Header.css";
import { assets } from "../../assets/assets";
import { motion } from "framer-motion";
import TextTransition, { presets } from 'react-text-transition';

const TEXTS = ['Clubs & Societies!', 'Upcoming Events!'];

const Header = ({ onExploreClick }) => {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(
      () => setIndex(index => index + 1),
      2500 
    );
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="header">
      <div className="header-contents-left">
        <h2 className="header-title">
          Explore Variety <br />
          <span className="header-of">of </span>
          <TextTransition
            springConfig={presets.wobbly}
            className="text-transition orange"  // Added "orange" class here
            inline
          >
            {TEXTS[index % TEXTS.length]}
          </TextTransition>
        </h2>
        <p>
          Stumble upon a variety of 75 clubs and countless ways <br />  to get
          involved and have fun 😎.
        </p>
        <motion.button
          onClick={onExploreClick}
          whileTap={{ scale: 0.9 }}
        > Explore Now
        </motion.button>
      </div>
      <div className="header-contents-right">
        <img src={assets.image1} alt="Decorative" className="image1" />
      </div>
    </div>
  );
};

export default Header;
