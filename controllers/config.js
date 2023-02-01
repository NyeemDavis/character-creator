const Character = require('../models/Character')

module.exports = {
    getIndex: async (req, res) => {
        try {
            const character = await Character.find({_id: req.body.characterFromJsFile})
            res.render('index.ejs')
        } catch (err) {
            console.log(err)
        }
    }
}