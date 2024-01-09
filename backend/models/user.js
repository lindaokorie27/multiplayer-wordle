const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    name: String,
    username: String,
    image: String
});

const User = mongoose.model('User', UserSchema); //convert to model named Tea
module.exports = User; //export for controller use