import logo from './logo.svg'
import './App.css'
import React from 'react'
// function App() {
//   return
// }
// export default App
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
      {/* <Route path="/" element={<App />} />
      <Route path="/Rides/" element={<Rides />} /> */}
    </div>
  )
}

export default App
