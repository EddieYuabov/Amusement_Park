import './App.css'
import Home from './components/Home'
import Rides from './components/Rides'
import { Routes, Route } from 'react-router-dom'
import React from 'react'

const App = () => {
  return (
    <div className="App">
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="rides" element={<Rides />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
