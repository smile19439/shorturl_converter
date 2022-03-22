const express = require('express')
const router = express.Router()

const home = require('./modules/home')
const shortened = require('./modules/shortened')

router.use('/', home)
router.use('/shortened' , shortened)

module.exports = router