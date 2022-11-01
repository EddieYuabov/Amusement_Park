import React from 'react'
import {Link} from 'react-router-dom' 
<<<<<<< HEAD
import axios from 'axios'
import { useState, useEffect } from 'react'

const Home = () => {

console.log('home')
return (
<div className="Home">
    <button className='link-button'>
    <Link className = 'link' to="rides">View All Rides</Link>
    </button>
</div>
  )
=======
// import './App.css'


const Home = () => {


  return (
    <div className="Home">
       
       <button>
       <Link className='link' to="/"> View All Rides</Link>
       </button>
    </div>
      )
>>>>>>> 0e42203baaea60c9c2874038b756e8f9c1728f0f
}


export default Home