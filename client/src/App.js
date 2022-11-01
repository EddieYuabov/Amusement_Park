// import './App.css'
import Home from './components/Home'
import { Routes, Route } from 'react-router-dom'
import React from 'react'
import RidesPage from './components/RidesPage'

const App = () => {
  return (
    <div className="App">
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rides" element={<RidesPage />} />
        </Routes>
      </main>
    </div>
  )
}
export default App
