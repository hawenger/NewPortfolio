import React from 'react'

export default function PortfolioButton() {
    function portfolioButton() {
        console.log('portfolio')
    }
return (
    <>
    <button className="PortfolioButton btn color-shift" onClick={portfolioButton}>Portfolio</button>
    </>
)
}
