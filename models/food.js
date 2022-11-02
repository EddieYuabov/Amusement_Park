const { Schema } = require('mongoose')

const Food = new Schema(
  {
    name: { type: String, require: true },
    image: { type: String, require: true },
    price: { type: Number, require: true }
  },
  { timestamps: true }
)

module.exports = Food
