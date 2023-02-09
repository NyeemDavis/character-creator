const express = require('express');
const session = require('express-session')
const passport = require('passport')
const app = express();
const connectDB = require('./config/database')
const homeRoutes = require('./routes/home')
const characterRoutes = require('./routes/characters')

require('dotenv').config({path: './config/.env'})

connectDB()

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false,
    store: new SQLiteStore({ db: 'sessions.db', dir: './var/db' })
}));

// Passport middleware
app.use(passport.initialize())
app.use(passport.session())

app.use('/', homeRoutes)
app.use('/characters', characterRoutes)

app.listen(process.env.PORT, () => {
    console.log(`Connected to port ${process.env.PORT}, Server is running`)
});


