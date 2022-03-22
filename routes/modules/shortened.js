const express = require('express')
const router = express.Router()

const Shorturl = require('../../models/shorturl')
const getShortenedUrl = require('../../models/getShortenedUrl')

router.post('/', (req, res) => {
  const originalUrl = req.body.originalUrl
  let ShortenedUrlArray = []
  let shortenedUrl = ''
  let randomString = ''

  return Shorturl.find()
    .lean()
    .then((url) => {
      url.forEach((element) => {
        if (element.originalUrl === originalUrl) {
          shortenedUrl = `${req.headers.origin}/${element.shortenedUrl}`
        } else {
          ShortenedUrlArray = getShortenedUrl.ShortenedUrlToArray(element)
        }
      })

      if (shortenedUrl.length <= 0) {
        randomString = getShortenedUrl()
        while (ShortenedUrlArray.includes(randomString)) {
          randomString = getShortenedUrl()
        }
        shortenedUrl = `${req.headers.origin}/${randomString}`
      }
      res.render('shortened', { shortenedUrl })
      return randomString
    })
    .then((randomString) => {
      if (randomString.length > 0) {
        const newUrl = new Shorturl({ originalUrl, shortenedUrl: randomString })
        return newUrl.save()
      }
    })
    .catch(error => console.log(error))
})

module.exports = router