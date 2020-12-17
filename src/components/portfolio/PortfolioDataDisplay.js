import React from 'react'
import EmbedLinks from './EmbedLinks'

export default function PortfolioDataDisplay(props) {
    const seven = `http://se-7-en.herokuapp.com/`
    const robert = `https://vast-depths-13570.herokuapp.com/`
    if(props.channels === 'display')
    return (
        <div className="PortfolioLinks">
            <a className="link" href={seven}>Se7en</a>
            <a className="link" href={robert}>Robert</a>
            <a className="link" href="https://burgerpolice.herokuapp.com/">Burger Police</a>
            <a className="link" href="https://hawenger.github.io/PasswordGenerator/">EyePass</a>
            <a className="link" href="https://hawenger.github.io/ClickbaitQuiz/">Clickbait Quiz</a>
            <a className="link" href="https://sbhwang23.github.io/Turnip-Da-Beet/">Turnip Da Beet</a>
            <a className="link" href="https://warm-river-71685.herokuapp.com/">Note Taker</a>
        </div>
    )
    return(
        <>
            <EmbedLinks {...props}/>
        </>
    )
}
