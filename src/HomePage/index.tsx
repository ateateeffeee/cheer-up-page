import React from 'react';
import AdverbGenerator from '../utils/AdverbGenerator';

const Homepage = () => {
    return (
        <div id="home" className="home-page">
            <h1>CHEER THE {AdverbGenerator().toUpperCase()} UP!</h1>
        </div>
        
    )
}
export default Homepage;