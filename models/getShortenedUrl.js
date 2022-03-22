let ShortenedUrlArray = []

function ShortenedUrlToArray(element) {
  return ShortenedUrlArray = ShortenedUrlArray.concat(element.shortenedUrl)
}

function getShortenedUrl() {
  const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890'
  let randomString = ''

  for (let i = 0; i < 5; i++) {
    randomString += letters[Math.floor(Math.random() * letters.length)]
  }
  return randomString
}

module.exports = getShortenedUrl
module.exports.ShortenedUrlToArray = ShortenedUrlToArray