import React, { useState } from 'react';
import './index.scss'; // Make sure this is imported

const HamburgerMenu: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    // Function to close the menu and handle scrolling
    const handleLinkClick = (target: string) => {
        setIsOpen(false);  // Close the menu

        if (target === 'home') {
            window.scrollTo({ top: 0, behavior: 'smooth' });  // Scroll to the top smoothly
        }
    };

    return (
        <nav className="hamburger-menu">
            <div className="hamburger" onClick={toggleMenu}>
                <div className={isOpen ? "bar bar-1 open" : "bar bar-1"}></div>
                <div className={isOpen ? "bar bar-2 open" : "bar bar-2"}></div>
                <div className={isOpen ? "bar bar-3 open" : "bar bar-3"}></div>
            </div>
            <ul className={isOpen ? "menu open" : "menu"}>
                <li><a href="#home" onClick={() => handleLinkClick('home')}>Home</a></li>
                <li><a href="#about" onClick={() => handleLinkClick('about')}>About</a></li>
                <li><a href="#services" onClick={() => handleLinkClick('services')}>Services</a></li>
                <li><a href="#contact" onClick={() => handleLinkClick('contact')}>Contact</a></li>
            </ul>
        </nav>
    );
};

export default HamburgerMenu;
