import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import {Link} from 'react-router-dom' 
import '../App.css'

const Home = () => {

console.log('home')
return (
<div className="Home">
    <button className='link-button'>
    <Link className = 'link' to="rides">View All Rides</Link>
    </button>
</div>
)
}

export default Home