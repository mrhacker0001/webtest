import React from 'react'
import img from './assets/Beats by Dre __ — apricotberlin.jpeg'
import './Home.css'

function Home() {
    return (
        <div className='Home'>
            <img src={img} alt="" />
            <div className="first-page">
                <div className="text">
                    <h1>Test-English</h1>
                <span>Take your learning with you!</span>
                <p>Grammar lessons with exercises and clear explanations, grammar charts, multilevel mock test, reading and listening tests with transcriptions, writing lessons, instant marking, answer feedback, and much more!</p>
                </div>
                
            </div>
        </div>
    )
}

export default Home