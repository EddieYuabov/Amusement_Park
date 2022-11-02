import { useState, useEffect } from 'react'
import React from 'react'
import {Link} from 'react-router-dom' 
import '../App.css'
import themeparkimage from '../themeparkimg.jpg'


const Home = () => {


  return (
    <div className="Home">
       <img className='themepark-img' src={themeparkimage} />
       <button className='home-btn' >
       <Link className='link' to="rides"> View All Rides</Link>
       </button>
      <div id="foodDiv">
        <button>
          <Link id="rideBtn" className='link' to="/rides"> View All Rides</Link>
        </button>
        <button>
          <Link id="foodBtn" className='link' to="/foods"> View All Foods</Link>
        </button>
      </div>
       <button>
       <Link className='link' to="rides"> View All Rides</Link>
       </button>
    </div>
      )
}


export default Home
