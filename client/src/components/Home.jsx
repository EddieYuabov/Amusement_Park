import React from 'react'
import {Link} from 'react-router-dom' 
import axios from 'axios'
import { useState, useEffect } from 'react'

const Home = () => {

console.log('home')
return (
<div className="Home">
    <button className='link-button'>
    <Link className = 'link' to="/rides">View All Rides</Link>
    </button>
</div>
  )
}


export default Home