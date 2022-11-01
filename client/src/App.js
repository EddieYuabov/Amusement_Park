import './App.css'

import React from 'react'

import Rides from './components/Rides'
import RidesArray from './components/RidesArray.js'

const App = () => {
  return (
    <div className="main-container">
      <ul className="rides-list">
        {RidesArray.map((rideItem) => {
          console.log(rideItem)
          {
          }
          return (
            <Rides ride={rideItem.ride} thrillLevel={rideItem.thrillLevel} />
          )
        })}
      </ul>
    </div>
  )
}

export default App
