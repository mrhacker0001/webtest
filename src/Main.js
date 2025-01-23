import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Grammar from './Components/Grammar'
import Vocabulary from './Components/Vocabulary'
import Listening from './Components/Listening'
import Reading from './Components/Reading'
import Writing from './Components/Writing'
import MockExams from './Components/MockExams'
import './Main.css'
import Home from './Home'

function Main() {
    return (
        <div className='Main'>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Grammar" element={<Grammar />} />
                <Route path="/Listening" element={<Listening />} />
                <Route path="/Vocabulary" element={<Vocabulary />} />
                <Route path="/Reading" element={<Reading />} />
                <Route path="/Writing" element={<Writing />} />
                <Route path="/MockExams" element={<MockExams />} />
            </Routes>
        </div>
    )
}

export default Main