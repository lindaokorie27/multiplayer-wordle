require('dotenv').config();

const express = require("express");
const mongoose = require('mongoose');

//establish connection to database
mongoose.connect(
    process.env.MONGODB_URI,
    { useFindAndModify: false, useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true},
    (err) => {
        if (err) return console.log("Error: ", err);
        console.log("MongoDB Connection -- Ready state is:", mongoose.connection.readyState);
    }
);

const app = express();

app.use(express.json()); // parses incoming requests with JSON payloads

const routes = require('./routes/feedback'); // import all routes

app.use('/', routes); // added to use the routes

const listener = app.listen(process.env.PORT || 3000, () => {
    console.log('App is listening on port ' + listener.address().port)
});