import React from 'react'
import '../App.css'
import RideCard from './RideCard'
import RidesArray from './RidesArray.js'

const RidesPage = () => {
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

export default RidesPage
