const PORT = process.env.PORT || 3001
const db = require('./db')
const express = require('express')
const cors = require('cors')
const { Rides, Park } = require('./models')

const app = express()

app.use(express.json())
app.use(cors())

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
app.post('/park', async (req, res) => {
  let createPark = await Park.create(req.body)
  res.json(createPark)
})

//Read all Parks
app.get('/park', async (req, res) => {
  let allParks = await Park.find({})
  res.json(allParks)
})

app.listen(PORT, () => {
  console.log(`Express server is listening on port ${PORT}`)
})
