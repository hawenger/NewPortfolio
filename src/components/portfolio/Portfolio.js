import React from 'react';
import "./Portfolio.css"
import TitleButton from './TitleButton';
import PortfolioDataDisplay from './PortfolioDataDisplay';
 
const Portfolio = () => {
    return (
        <div className="Wrapper Portfolio-Wrapper">
            <div className="Display-Grid">
                <div className="Play-Side">
                    <div className="Play-Grid">
                        <div className="Play-Empty-1">
                            <div className="Play-Empty-Grid">
                                <div className="grid">P</div>
                                <div className="grid">O</div>
                                <div className="grid">I</div>
                                <div className="grid">L</div>
                                <div className="grid">F</div>
                                <div className="grid">O</div>
                                <div className="grid">P</div>
                                <div className="grid">I</div>
                                <div className="grid">O</div>
                                <div className="grid">F</div>
                                <div className="grid">F</div>
                                <div className="grid">F</div>
                                <div className="grid">O</div>
                                <div className="grid">I</div>
                                <div className="grid">O</div>
                                <div className="grid">L</div>
                                <div className="grid">L</div>
                                <div className="grid">I</div>
                                <div className="grid">F</div>
                                <div className="grid">P</div>
                                <div className="grid">R</div>
                                <div className="grid">P</div>
                                <div className="grid">R</div>
                                <div className="grid">T</div>
                                <div className="grid">F</div>
                                <div className="grid">L</div>
                                <div className="grid">F</div>
                                <div className="grid">O</div>
                                <div className="grid">I</div>
                                <div className="grid">O</div>
                                <div className="grid">I</div>
                                <div className="grid">P</div>
                                <div className="grid">O</div>
                                <div className="grid">R</div>
                                <div className="grid">P</div>
                                <div className="grid">R</div>
                            </div>
                        </div>
                        <div className="Play-Empty-2"></div>
                        <div className="Play-Title">
                            <TitleButton/>
                        </div>
                        <div className="Play-Empty-3"></div>
                    </div>
                </div>
                <div className="Work-Side">
                    <PortfolioDataDisplay/>
                </div>
            </div>
       </div>
    );
}
 
export default Portfolio;