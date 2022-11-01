import React from 'react'
// import './App.css'
import RidesArray from './RidesArray.js'
import RideCard from './RideCard.js'

<<<<<<< HEAD:client/src/components/Rides.jsx
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
=======


const Rides = (props) => {
  // const navigate = useNavigate()
const imageName = props.ride.toLowerCase().replaceAll(' ', '')

  
    return (
      <li className='ride-card'>
       <img src={rideImages[imageName]} className='ride-image'/>
        <h4>{props.ride}</h4>
        <span>Thrill Level: {props.thrillLevel}</span>
      </li>
    )
>>>>>>> 0e42203baaea60c9c2874038b756e8f9c1728f0f:client/src/components/RideCard.jsx
}

export default Rides