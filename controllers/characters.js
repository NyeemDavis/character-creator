const Character = require('../models/Character')
const addStats = require('../public/js/addStats');
const classStats = require('../public/js/stats');

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
            await Character.create({firstName: req.body.firstName,
                                    lastName: req.body.lastName, 
                                    characterClass: req.body.class, 
                                    stats: addStats.addStats(req.body.class, stats)})
            console.log('Character Created')
            res.redirect('/characters')
        } catch (err) {
            console.log(err)
        }
    },
    deleteCharacter: async (req, res) => {
        console.log(req.body.fName, req.body.lName)
        try {
            await Character.deleteOne({firstName: req.body.fName, lastName: req.body.lName, characterClass: req.body.class})
            console.log('Character Deleted')
            res.json('Deleted Character')
        } catch (err) {
            console.log(err)
        }
    }
}