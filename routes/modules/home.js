const express = require('express')
const router = express.Router()

const ShortUrl = require('../../models/shorturl')
const getShortenedUrl = require('../../models/getShortenedUrl')

router.get('/', (req, res) => {
  res.render('home')
})

router.post('/', (req, res) => {
  const originalUrl = req.body.originalUrl.trim()

  if (originalUrl.length > 0) {
    let ShortenedUrlArray = []
    let shortenedUrl = ''
    let randomString = ''

    return ShortUrl.find()
      .lean()
      .then((url) => {
        url.forEach((element) => {
          if (element.originalUrl === originalUrl) {
            // 如果輸入網址相同會產生相同短網址
            shortenedUrl = `${req.headers.origin}/${element.shortenedUrl}`
          } else {
            // 把資料庫短網址存成陣列
            ShortenedUrlArray = getShortenedUrl.ShortenedUrlToArray(element)
          }
        })
        if (shortenedUrl.length === 0) {
          // 產生隨機字串，如果與已產生字串相同則重新產生
          randomString = getShortenedUrl()
          while (ShortenedUrlArray.includes(randomString)) {
            randomString = getShortenedUrl()
          }
          shortenedUrl = `${req.headers.origin}/${randomString}`
        }
        res.render('home', { shortenedUrl })
        return randomString
      })
      .then((randomString) => {
        if (randomString) {
          return ShortUrl.create({ originalUrl, shortenedUrl: randomString })
        }
      })
      .catch(error => console.log(error))
  } else {
    // 若沒有輸入網址會顯示提醒訊息
    const alertMessage = '必須輸入網址才能產生短網址 !'
    return res.render('home', { alertMessage })
  }
})

router.get('/:shortenedUrl', (req, res) => {
  const shortenedUrl = req.params.shortenedUrl
  const reqUrl = `http://${req.headers.host}/${shortenedUrl}`

  return ShortUrl.find({ shortenedUrl })
    .then((url) => {
      if (url.length > 0) {
        res.redirect(url[0].originalUrl)
      } else {
        // 若輸入的短網址找不到對應網址時
        res.render('home', { reqUrl })
      }
    })
    .catch(error => console.log(error))
})

module.exports = router