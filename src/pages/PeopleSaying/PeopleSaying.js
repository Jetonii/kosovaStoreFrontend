import React from 'react'
import PeopleSayingCard from './PeopleSayingCard'
import "./PeopleSaying.css"

const PeopleSaying = () => {
    return (
        <div className="peopleSaying">
            <h1 className="peopleSaying__h1">What are others saying about us</h1>
            <section className="peopleSaying__cards">
                <PeopleSayingCard />
                <PeopleSayingCard />
                <PeopleSayingCard />
                <PeopleSayingCard />
                <PeopleSayingCard />
                <PeopleSayingCard />
            </section>
            <button className='peopleSaying__button'>RATE US</button>
        </div>
    )
}

export default PeopleSaying