import { useState, useEffect } from 'react'
import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import {Link} from 'react-router-dom' 

const Home = () => {


return (
<div className="Home">
    <button className='link-button'>
    <Link className = 'link' to="/rides">View All Rides</Link>
    </button>
</div>
  )
}


export default Home
