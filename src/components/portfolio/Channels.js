import React, {useState} from 'react'
import PortfolioDataDisplay from './PortfolioDataDisplay'

export default function Channels(props) {
    
    if(props.toggle === 'off')
    return (
        <>
            <i style={{color:'yellow', fontSize:'2em', backgroundColor:'aliceblue', marginTop:'.5em'}} class="fa fa-toggle-off" aria-hidden="true"></i>
            <PortfolioDataDisplay/>
        </>
    )
    return (
        <>
            <i style={{color:'yellow', fontSize:'2em', backgroundColor:'aliceblue', marginTop:'.5em'}} class="fa fa-toggle-on" aria-hidden="true"></i>
        </>
    )
}
