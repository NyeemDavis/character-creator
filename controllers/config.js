const Character = require('../models/Character')
const addStats = require('../public/js/addStats');
const classStats = require('../public/js/stats');

module.exports = {
    getIndex: (req, res) => {
        console.log()
        res.render('config.ejs')
    }
}