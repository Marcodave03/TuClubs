import React, { useState } from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';
import { Menu } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className='navbar'>
      <Link to="/">
        <img src={assets.logo2} alt="Logo" className='logo' />
      </Link>
      <div className="navbar-menu-desktop">
        <ul className="navbar-menu">
            <li> <Link to="/about-us">About us</Link></li>
            <li> <Link to="/cs">C&S</Link></li>
            <li> <Link to="/disclaimer">Disclaimer</Link></li>
            <li> <Link to="/volunteer">Volunteer</Link></li>
        </ul>
      </div>
      <button className="menu-icon" onClick={toggleMenu}>
        <Menu size={24} />
      </button>
      {isOpen && (
        <div className="navbar-menu-mobile">
          <ul>
            <li><Link to="/about-us" onClick={toggleMenu}>About Us</Link></li>
            <li><Link to="/cs" onClick={toggleMenu}>C&S</Link></li>
            <li><Link to="/disclaimer" onClick={toggleMenu}>Disclaimer</Link></li>
            <li><Link to="/volunteer" onClick={toggleMenu}>Volunteer</Link></li>
          </ul>
        </div>
      )}
      <div className="navbar-right">
        <Link to='/events'>
          
        <motion.button
          whileTap={{ scale: 0.9 }}
        > Events
        </motion.button>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
