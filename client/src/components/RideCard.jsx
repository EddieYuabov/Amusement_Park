import React from 'react'
import '../App.css'
import rideImages from './ridesImages'



const Rides = (props) => {

const imageName = props.ride.toLowerCase().replaceAll(' ', '')

  
    return (
      <li className='ride-card'>
       <img src={rideImages[imageName]} className='ride-image'/>
        <h4>{props.ride}</h4>
        <span>Thrill Level: {props.thrillLevel}</span>
      </li>
    )
}

export default Rides