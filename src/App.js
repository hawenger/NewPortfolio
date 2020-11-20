import React from 'react';
import './App.css';
import ContactButton from './contact/ContactButton'
import AboutButton from './about/AboutButton'
import PortfolioButton from './portfolio/PortfolioButton'

function App() {
  return (
  <header className="Wrapper" >
    <div className="scene-grid"> 
      <div className="Buttons">
        <AboutButton/>
        <ContactButton/>
        <PortfolioButton/>
      </div>
    </div>
  </header>
  );
}

export default App;
