import React from 'react'
import rideImages from './ridesImages'
// import { useNavigate } from 'react-router-dom'



const Rides = (props) => {
  // const navigate = useNavigate()
const imageName = props.ride.toLowerCase().replaceAll(' ', '')

  
    return (
      <li className='ride-card'>
       <img src={rideImages[imageName]} />
        <h4>{props.ride}</h4>
        <span>{props.thrillLevel}</span>
      </li>
    )
}

export default Rides