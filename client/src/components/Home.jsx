import { useState, useEffect } from 'react'
import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import {Link} from 'react-router-dom' 

const Home = () => {
  const [formState, setFormState] = useState({ })
  const [parks, updateParks] = useState([])
  const navigate = useNavigate()
 

const handleChange = (event) => {
  setFormState({ ...formState, [event.target.id]: event.target.value })
}

useEffect(() => {
  const apiCall = async () => {
  let response = await axios.get('http://localhost:3001/parks')
    updateCountries(response.data)
    }
  apiCall()
  }, [])

const handleSubmit = async (event) => {
  event.preventDefault()
  let addedCountry = await axios
    .post('http://localhost:3001/parks', formState)
    .then((response) => {
      return response
    })
    .catch((error) => {
      return error
    })
  updateParks([...parks, addedPark.data])
  setFormState({ name: '', location: '', image: '', price: '', rides: ''})
  }

const getRides = (id) => {
  navigate(`rides/${id}`)
}

return (
<div className="Home">
    <button className='link-button'>
    <Link className = 'link' to="/rides">View All Rides</Link>
    </button>
    {parks ? parks.map((park) => (
      <div className="parks" key={park._id}>
       <h1 onClick={()=>{getRides(ride._id)}}>{park.name}</h1>
       <p>{park.location}</p>
       <image src={park.image} alt='park image'/>
       <p>{park.price}</p>
       <p>{park.rides}</p>
      </div>
    )): ''}
</div>
  )
}


export default Home
