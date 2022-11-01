const PORT = process.env.PORT || 3001
const db = require('./db')
const express = require('express')
const cors = require('cors')
const { Park, Rides } = require('./models')

const app = express()

app.use(express.json())
app.use(cors())

app.get('/', async (req, res) => {
  let findRide = await Park.find({})
  res.json(findRide)
})

app.listen(PORT, () => {
  console.log(`Express server is listening on port ${PORT}`)
})
