import React from 'react';
import HamburgerMenu from './Menus/Hamburger';
import About from './About';
import Homepage from './HomePage';
import Footer from './Footer';

const App = () => {
    return (
        <div className="App">
            <HamburgerMenu />
            <div className='page-content'>
              <div id="home">
                  <Homepage/>
              </div>
            
              <div id="about">
                  <About/>
              </div>

              <div id="contact">
                  <h1>Contact Section</h1>
=             </div>
              </div>
            <Footer/>
        </div>
    );
};

export default App;
