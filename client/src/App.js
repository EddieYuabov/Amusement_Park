// import './App.css'
import Home from './components/Home'
import { Routes, Route } from 'react-router-dom'
import React from 'react'
import RidesPage from './components/RidesPage'
import FoodPage from './components/FoodPage'

const App = () => {
  return (
    <div className="App">
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rides" element={<RidesPage />} />
          <Route path="/food" element={<FoodPage />} />
        </Routes>
      </main>
    </div>
  )
}
export default App
