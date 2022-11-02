import React from 'react'
import {Link} from 'react-router-dom' 
import '../App.css'
import themeparkimage from '../themeparkimage.jpg'



const Home = () => {


return (
    <div className="Home">

<div id="foodDiv">

       <img className='themepark-img' src={themeparkimage} />
      <div id="foodDiv">
        <button>
          <Link id="rideBtn" className='link' to="/rides"> View All Rides</Link>
        </button>
        <button>
          <Link id="foodBtn" className='link' to="/foods"> View All Foods</Link>
        </button>
      </div>
    </div>
    </div>
      )
}

export default Home