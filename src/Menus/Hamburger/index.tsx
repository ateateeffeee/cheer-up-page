import React, { useState } from 'react';
import './index.scss';  // SCSS file for styling

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  console.log('is it open ', isOpen);

  return (
    <nav className="navbar">
      <div className="hamburger" onClick={toggleMenu}>
        <div className={isOpen ? "bar bar-1 open" : "bar bar-1"}></div>
        <div className={isOpen ? "bar bar-2 open" : "bar bar-2"}></div>
        <div className={isOpen ? "bar bar-3 open" : "bar bar-3"}></div>
      </div>
      <ul className={isOpen ? "menu open" : "menu"}>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default HamburgerMenu;
