const { Schema } = require('mongoose')

const Park = new Schema(
  {
    name: { type: String, require: true },
    location: { type: String, require: true },
    image: { type: String, require: true },
    price: { type: Number, require: true },
    rides: { type: Schema.Types.ObjectId, ref: 'rides' }
  },
  { timestamps: true }
)

module.exports = Park
