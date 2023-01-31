const express = require('express')
const router = express.Router()
const configController = require('../controllers/config')


router.get('/', configController.getIndex)

module.exports = router