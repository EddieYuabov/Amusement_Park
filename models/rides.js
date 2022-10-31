const { Schema } = require('mongoose')

const Rides = new Schema(
  {
    name: { type: String, require: true },
    image: { type: String, require: true },
    scariness: { type: Number, require: true }
  },
  { timestamps: true }
)

module.exports = Rides
