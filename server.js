const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const mongodb = require('mongodb');
const app = express();
const addStats = require('./addStats')
const playerStats = require('./stats)
const PORT = 8000;
require('dotenv').config()

let db,
    dbConnectionString = process.env.DB_STRING,
    dbName = 'characters'

MongoClient.connect(dbConnectionString, { useUnifiedTopology: true })
    .then(client => {
        console.log('Connected to databse')
        db = client.db(dbName)
    })

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.static('views'))
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
    // Get database 
    db.collection('characters').find().toArray() // Turn collection into an array
    .then(data => {
        // Render ejs
        res.render('index.ejs', { info: data })
    })
    .catch(err => console.error(err))
})

app.get('/addCharacter', (req, res) => { // Server would try to do a get request on the /addCharacter route
    res.redirect('/')
})

app.post('/addCharacter', (req, res) => {
        db.collection('characters').insertOne({charFName: req.body.charFName, charLName: req.body.charLName,
            class: req.body.class}) 
            .then(result => {
                applyStats.checkClassAndMatch(String(req.body.class), stats)
                console.log('Character Added')
                res.redirect('/') // Redirect user to main page
                'burger'
            })
            .catch(err => console.error(err))
})

app.delete('/deleteCharacater', (req, res) => {
    db.collection('characters').deleteOne({charFName: req.body.charFNameS})
    .then(result => {
        console.log('Character Deleted')
        res.json('Character Deleted')
    })
    .catch(error => console.error(error))

})

app.listen(process.env.PORT || PORT, () => {
    console.log(`Connect to port ${PORT}`)
})
