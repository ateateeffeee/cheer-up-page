import './App.css';
import Homepage from './HomePage';
import Hamburger from './Menus/Hamburger';
import React from 'react';


function App() {
  return (
    <div className="App">
      <Hamburger />
      <Homepage/>
    </div>
  );
}

export default App;
