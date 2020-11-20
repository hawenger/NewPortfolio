import React from 'react'

export default function AboutButton() {
    
    function aboutButton() {
        console.log('About')
    }
return (
    <>
    <button className="AboutButton btn color-shift" onClick={aboutButton}>About</button>
    </>
)

}
