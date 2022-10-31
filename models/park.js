const { Schema } = require('mongoose')

const Park = new Schema({
  name: { type: String, require: true },
  amount: { type: String, require: true }
})
