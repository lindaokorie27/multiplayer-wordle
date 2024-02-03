require('dotenv').config();

const express = require("express");
const connectToMongo = require('./database');
const helmet = require('helmet');
const compression = require('compression');


//establish connection to database
connectToMongo();

const app = express();

app.use(express.json()); // parses incoming requests with JSON payloads

const routes = require('./routes/request'); // import all routes

app.use('/', routes); // added to use the routes

const listener = app.listen(process.env.PORT || 3000, () => {
    console.log('App is listening on port ' + listener.address().port)
});