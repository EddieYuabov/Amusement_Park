import React from 'react'
import {Link} from 'react-router-dom' 
import '../App.css'
import themeparkimage from '../themeparkimage.jpg'



const Home = () => {

return (
    <div className="Home">
       <img className='themepark-img' src={themeparkimage} />
      <div id="foodDiv">
        <button id="rideBtn">
          <Link  className='link' to="/rides"> View All Rides</Link>
        </button>
        <button id="foodBtn">
          <Link  className='link' to="/foods"> View All Foods</Link>
        </button>
      </div>
    </div>
      )
}

export default Home