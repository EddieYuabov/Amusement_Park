import React from 'react'
// import './App.css'
import RidesArray from './RidesArray.js'
import RideCard from './RideCard.js'

const Rides = () => {
  return (
    <div className="main-container">
      <ul className="rides-list">
        {RidesArray.map((rideItem) => {
          console.log(rideItem)
          {
          }
          return (
            <RideCard ride={rideItem.ride} thrillLevel={rideItem.thrillLevel} />
          )
        })}
      </ul>
    </div>
  )
}

export default Rides