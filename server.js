const express = require('express');
const app = express();
const connectDB = require('./config/database')
const homeRoutes = require('./routes/home')
const characterRoutes = require('./routes/characters')
const PORT = 8000


require('dotenv').config({path: './config/.env'});

connectDB()

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/', homeRoutes)
app.use('/characters', characterRoutes)

app.listen(PORT, () => {
    console.log(`Connected to port ${PORT}, Server is running`)
});


