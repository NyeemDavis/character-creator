const express = require('express')
const router = express.Router()
const characterController = require('../controllers/characters')


router.get('/', characterController.getCharacters)

router.post('/createCharacter', characterController.createCharacter)

router.delete('/deleteCharacter', characterController.deleteCharacter)

module.exports = router