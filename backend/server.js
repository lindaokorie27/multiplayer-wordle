require('dotenv').config();

const express = require("express");
const mongoose = require('mongoose');
const helmet = require('helmet');
const compression = require('compression');


//establish connection to database
mongoose.connect(
    process.env.MONGODB_URI,{
        useFindAndModify: false,
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useCreateIndex: true,
        server: { socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 } },
        replset: { socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 } },
    },
    function (err) {
        if (err) return console.log("Error: ", err);
        console.log(
          "MongoDB Connection -- Ready state is:",
          mongoose.connection.readyState
        );
      }
);

const app = express();
app.use(helmet());
app.use(compression()); //Compress all routes

app.use(express.json()); // parses incoming requests with JSON payloads

const routes = require('./routes/request'); // import all routes

app.use('/', routes); // added to use the routes
app.route('/').get(function (req, res) {
    res.sendFile(process.cwd() + '/index.html');
});

const listener = app.listen(process.env.PORT || 3000, () => {
    console.log('App is listening on port ' + listener.address().port)
});