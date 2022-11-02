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
       
    </div>
      )
}


export default Home
