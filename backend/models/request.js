const mongoose = require("mongoose");
const User = require('./user');

const RequestSchema = new mongoose.Schema({
    title: {type: String, required: true},
    category: {type: String, required: true},
    upvotes: {type: String, default: 0},
    status: {type: String, default: 'planned'},
    description: String,
    comments: [{ 
        id: mongoose.Schema.Types.UUID, 
        content: String, 
        user: {
            name: String,
            username: String,
            image: String
        }, 
        replies: [{ 
            content: {type: String, required: true}, 
            replyingTo: {type: String, required: true}, 
            user: {
                name: String,
                username: String,
                image: String
            }
        }]
    }]
});

const Request = mongoose.model('Request', RequestSchema); //convert to model named Request
module.exports = Request; //export for controller use