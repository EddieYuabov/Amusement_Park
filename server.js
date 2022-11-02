const PORT = process.env.PORT || 3001
const db = require('./db')
const express = require('express')
const cors = require('cors')
const logger = require('morgan')
const { Rides, Food } = require('./models')

const app = express()

app.use(express.json())
app.use(cors())
app.use(logger('dev'))

//Create Rides
app.post('/rides', async (req, res) => {
  let createRides = await Rides.create(req.body)
  res.json(createRides)
})

// Read all Rides
app.get('/rides', async (req, res) => {
  let allRides = await Rides.find({})
  res.json(allRides)
})

// Delete Ride
app.delete('/rides/:id', async (req, res) => {
  let deletedRide = await Rides.findByIdAndDelete(req.params.id)
  res.json(deletedRide)
})

//Create Park
app.post('/food', async (req, res) => {
  let createPark = await Food.create(req.body)
  res.json(createPark)
})

app.get('/food', async (req, res) => {
  let allParks = await Food.find({})
  res.json(allParks)
})

app.get('/food/:id', async (req, res) => {
  const { id } = req.params
  const food = await Food.findById(id)
  return res.send(food)
})

app.delete('/food/:id', async (req, res) => {
  let deletedFood = await Food.findByIdAndDelete(req.params.id, req.body)
  res.json(deletedFood)
})

app.listen(PORT, () => {
  console.log(`Express server is listening on port ${PORT}`)
})
