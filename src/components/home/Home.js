import React from 'react'
import ContactButton from '../contact/ContactButton'
import AboutButton from '../about/AboutButton'
import PortfolioButton from '../portfolio/PortfolioButton'

const home = () => {
    return (
        <header className="Wrapper" >
          <div className="scene-grid"> 
            <div className="FullStackTitle">
              <h1>FULL</h1>
              <h1>STACK</h1>
              <h1>DEVELOPER</h1>
            </div>
            <div className="Buttons">
              <AboutButton/>
              <ContactButton/>
              <PortfolioButton/>
            </div>
            <div className="emptyTwo"></div>
          </div>
        </header>
    );
}

export default home;


