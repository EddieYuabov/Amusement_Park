import { useState, useEffect } from 'react'
import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import {Link} from 'react-router-dom' 
// import './App.css'


const Home = () => {


  return (
    <div className="Home">
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
