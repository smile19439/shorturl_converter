const mongoose = require('mongoose')
const Schema = mongoose.Schema

const shorturlSchema = new Schema({
  originalurl: {
    type: String,
    required: true
  },
  shortenedurl: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('shorturl', shorturlSchema)