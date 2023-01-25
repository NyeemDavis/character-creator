const { application } = require('express');
const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const mongodb = require('mongodb');
const app = express();
const checkClass = require('./public/js/checkClass');
const classStats = require('./public/js/stats');
const { v4: uuidv4 } = require('uuid');
const PORT = 8000;
require('dotenv').config();

let db,
    dbConnectionString = process.env.DB_STRING,
    dbName = 'characters';

MongoClient.connect(dbConnectionString, { useUnifiedTopology: true })
    .then(client => {
        console.log('Connected to Database')
        db = client.db(dbName)
    });

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.static('views'));
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
});


app.post('/addCharacter', (req, res) => {
        db.collection('characters').insertOne({charFName: req.body.charFName, charLName: req.body.charLName,
            class: req.body.class}) 
            .then(result => {

                db.collection('characters').updateOne({charFName: req.body.charFName, charLName: req.body.charLName,
                    class: req.body.class}, 
                    {
                        $set: {
                            'stats': checkClass.checkClassAndMatch(req.body.class, stats),
                            'uuid': uuidv4()
                        }
                    }
                    )
                console.log('Character Added')
                res.redirect('/') // Redirect user to main page
            })
            .catch(err => console.error(err))
});

app.post('/stats', (req, res) => {
    db.collection('characters').findOne()
    .then(data => {
        res.render('index.ejs')
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

});

app.listen(process.env.PORT || PORT, () => {
    console.log(`Connected to port ${PORT}`)
});


