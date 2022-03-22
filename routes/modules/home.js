const express = require('express')
const router = express.Router()

const ShortUrl = require('../../models/shorturl')

router.get('/', (req, res) => {
  res.render('home')
})

router.get('/:shortenedUrl', (req, res) => {
  shortenedUrl = req.params.shortenedUrl
  return ShortUrl.find({ shortenedUrl })
    .then((url) => {
      res.redirect(url[0].originalUrl)
    })
    .catch(error => console.log(error))
})

module.exports = router