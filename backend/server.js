require('dotenv').config();

const express = require("express");
const mongoose = require('mongoose');
const helmet = require('helmet');
const compression = require('compression');


//establish connection to database
mongoose.connect(
    process.env.MONGODB_URI);

const app = express();
app.use(helmet());
app.use(compression()); //Compress all routes

app.use(express.json()); // parses incoming requests with JSON payloads

const routes = require('./routes/request'); // import all routes

app.use('/', routes); // added to use the routes

const listener = app.listen(process.env.PORT || 3000, () => {
    console.log('App is listening on port ' + listener.address().port)
});