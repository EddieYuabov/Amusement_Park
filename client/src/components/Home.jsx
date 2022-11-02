import React from 'react'
import {Link} from 'react-router-dom' 
import '../App.css'


const Home = () => {


return (
    <div className="Home">
<div id="foodDiv">
        <button>
    <Link id="rideBtn" className='link' to="/rides"> View All Rides</Link>
        </button>
        <button>
    <Link id="foodBtn" className='link' to="/food"> View All Foods</Link>
        </button>
</div>
</div>
)
}


export default Home