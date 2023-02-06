const mongoose = require('mongoose')

mongoose.set('strictQuery', false);


const CharacterSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    characterClass: {
        type: String,
        required: true
    },
    weapon: {
        type: Object,
        required: true
    },
    stats: {
        type: Object,
        required: true
    }
})

module.exports = mongoose.model('Character', CharacterSchema)
