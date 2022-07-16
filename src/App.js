import React from 'react'
import logo from './logo.svg'
import { Routes, Route } from 'react-router-dom'
import { Signin, Signup, Feed } from './screens'
import './App.css'

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Feed />} />
                <Route path="signin" element={<Signin />} />
                <Route path="signup" element={<Signup />} />
            </Routes>
        </div>
    )
}

export default App
