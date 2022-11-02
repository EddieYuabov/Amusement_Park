import axios from 'axios'
import React from 'react'
import '../App.css'
import { useState, useEffect} from 'react'



const FoodPage = () => {
const [formState, setFormState] = useState({
  name: '',
  price: '',
  category: ''
})
const [foods, setFoods] = useState([])



useEffect(() => {
  const apiCall = async () => {
    let response = await axios.get(`http://localhost:3001/food`)
    setFoods(response.data)
  }
  apiCall()
}, [])

const handleSubmit = async (event) => {
  event.preventDefault()
  let getFood = await axios
    .post('http://localhost:3001/food', formState)
    .then((response) => {
      return response
    })
    .catch((error) => {
      console.error(error)
    })
  setFoods([...foods, getFood.data]) 
  console.log(getFood)
  setFormState({
    name: '',
    price: '',
    category: ''
  })
}
const handleChange = (event) => {
  setFormState({ ...formState, [event.target.id]: event.target.value })
}


const handleDelete = async (id, index) => {
  await axios.delete(`http://localhost:3001/food/${id}`, formState)
  let tempState = [...foods]
  tempState.splice(index, 1)
  setFoods(tempState)
  setFormState({name: '', price: '', category: ''})
  }

return (
  <main>
    <div>
      <h1>Food Pages</h1>
      {foods.map((food, index) => (
        <div className='foods' key={food._id}>
        <h2>{food.name}</h2>
        <p>${food.price}</p>
        <p>{food.category}</p>
        <button onClick={() => handleDelete(food._id, index)}>Delete</button>
        </div>
  ))}
    </div>
    
    <form className="FoodForm" onSubmit={handleSubmit}>
      <label htmlFor='name'>Food Name: </label>
      <input id="name" value={formState.name} onChange={handleChange}></input>
      <label htmlFor='price'>Price: </label>
      <input id="price"value={formState.price} onChange={handleChange}></input>
      <label htmlFor='category'>Category: </label>
      <input id="category" value={formState.category} onChange={handleChange}></input>
      <button type="submit">Submit</button>
    </form>
  </main>
)
}

export default FoodPage