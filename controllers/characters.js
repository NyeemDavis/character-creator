const Character = require('../models/Character')
const addStats = require('../public/js/addStats');
const classStats = require('../public/js/stats');
const addWeapon = require('../public/js/addWepon')
const weaponStats = require('../public/js/weapons')

module.exports = {
    getCharacters: async (req, res) => {
        try {
            const characterItems = await Character.find()
            res.render('characters.ejs', {characters: characterItems})
        } catch (err) {
            console.log(err)
        }
    },
    createCharacter: async (req, res) => {
        try {
            await Character.create({
                                    firstName: req.body.firstName,
                                    lastName: req.body.lastName, 
                                    characterClass: req.body.class,
                                    weapon: addWeapon.addWeapon(req.body.weapon, weapons),
                                    stats: addStats.addStats(req.body.class, stats)})
            console.log('Character Created')
            res.redirect('/characters')
        } catch (err) {
            console.log(err)
        }
    },
    deleteCharacter: async (req, res) => {
        try {
            await Character.findOneAndDelete({_id:req.body.characterFromJSFile})
            console.log('Character Deleted')
            res.json('Deleted Character')
        } catch (err) {
            console.log(err)
        }
    },
    showStats: async (req, res) => {
        console.log('Receieved request')
        try {
            const character = Character.find({_id:req.query})
            console.log(character)
        } catch (err) {
            console.log('Failed', err)
        }
    }
}