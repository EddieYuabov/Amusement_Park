const mongoose = require('mongoose')
const ParkSchema = require('./park')
const RidesSchema = require('./rides')
const FoodSchema = require('./food')

const Park = mongoose.model('Park', ParkSchema)
const Rides = mongoose.model('Rides', RidesSchema)
const Food = mongoose.model('Food', FoodSchema)

module.exports = {
  Park,
  Rides,
  Food
}
