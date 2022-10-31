const mongoose = require('mongoose')
const ParkSchema = require('./park')
const RidesSchema = require('./rides')

const Park = mongoose.model('Park', ParkSchema)
const Rides = mongoose.model('Rides', RidesSchema)

module.exports = {
  Park,
  Rides
}
