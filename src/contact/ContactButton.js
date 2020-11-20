import React from 'react'

export default function ContactButton() {
    function contactButton() {
        console.log('contact')
    }
return (
    <>
    <button className="ContactButton btn color-shift" onClick={contactButton}>Contact</button>
    </>
)
}
