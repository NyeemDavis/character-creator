const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const mongodb = require('mongodb');
const app = express();
const PORT = 8000;
const stats = require('./public/js/stats')
require('dotenv').config()

let db,
    dbConnectionString = process.env.DB_STRING,
    dbName = 'characters'

let statsdbName = 'stats'
MongoClient.connect(dbConnectionString, { useUnifiedTopology: true })
    .then(client => {
        console.log('Connected to databse')
        db = client.db(dbName)
        statsdbName = client.db(statsdbName)
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

// app.post('/getStats', (req, res) => {
//     statsdbName.collection('stats').insertOne(req.body.stats)
//     .then(result => {
//         console.log('Stats Added')
//         res.json('Stats added')
//     })
//     .catch(err => console.error(err))
// })


app.post('/addCharacter', (req, res) => {
    db.collection('characters').insertOne({charFName: req.body.charFName, charLName: req.body.charLName,
        class: req.body.class}) 
        .then(result => {
            console.log('Character Added')
            res.redirect('/') // Redirect user to main page
        })
        .catch(err => console.error(err))
}, () => {
    app.put('/updateWithStats', (req, res) => {
        console.log(req)
        .then(result => {
            console.log('Success')
        })
        .catch(err => console.error(err))
    })
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



const stats = 
   [{Warrior: {health: 200, defense: 175, damage: 150, magic: 20}},
    {Archer : {health: 180,'defense': 120,'damage': 125,'magic': 30}},
   {Support: {'health': 200,'defense': 175,'damage': 150,'magic': 60}},
   {Mage: {'health': 200,'defense': 140,'damage': 75,'magic': 150}},
   {Assassin: {'health': 200,'defense': 135,'damage': 165,'magic': 55 }},
   {Healer: {'health': 200,'defense': 100,'damage': 60,'magic': 100}}]



