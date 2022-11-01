import './App.css'
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Rides from './components/Rides'

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
