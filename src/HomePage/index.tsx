import React from 'react';
import AdverbGenerator from '../utils/AdverbGenerator';

const Homepage = () => {
    return (
        <h1>CHEER THE {AdverbGenerator().toUpperCase()} UP</h1>
    )
}
export default Homepage;