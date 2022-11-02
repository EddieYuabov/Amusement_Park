const mongoose = require('mongoose')

const RidesSchema = require('./rides')
const FoodSchema = require('./food')

const Rides = mongoose.model('Rides', RidesSchema)
const Food = mongoose.model('Food', FoodSchema)

module.exports = {
  Rides,
  Food
}
