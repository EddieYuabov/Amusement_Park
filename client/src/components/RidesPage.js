import React from 'react'
import '../App.css'
import RideCard from './RideCard'
import RidesArray from './RidesArray.js'
import { Link } from 'react-router-dom'

const RidesPage = () => {
  return (
    <div className="main-container">
      <button className="back-btn">
        <Link className="link" to="/">
          Back
        </Link>
      </button>
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
