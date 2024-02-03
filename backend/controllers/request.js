const Request = require('../models/request');
const User = require('../models/user');

const newRequest = (req, res, next) => {
    Request.findOne({ title: req.body.title }).then((data) => {
        // if request is not in db, add it
        if (!data) {
            // create a new request object using the Request model and req.body
            const newRequest = new Request({
                title: req.body.title,
                category: req.body.category,
            })

            // save this object to database
            newRequest.save()
            .then((data)=>res.json(data))
            .catch((err) => res.json({Error: err}));
        } else {
            return res.json({message: "Request already exists"});
        }
    }).catch((err) => res.json(`Something went wrong, please try again. ${err}`));
};

const getAllRequest = (req, res, next) => {
    Request.find({})
    .then((data) => res.json(data))
    .catch((err) =>  res.json({Error: err}));
    
};

const getOneRequest = (req, res, next) => {
    const requestId = req.params.id;
    Request.findById(requestId)
    .then((data) => res.json(data))
    .catch((err) =>  res.json({Error: err}));
};

const deleteOneRequest = (req, res, next) => {
    const requestId = req.params.id;
    Request.deleteOne({"_id": requestId})
    .then((data) => {
        if( data.deletedCount == 0) {
            return res.json({message: "Request doesn't exist."});
        } else {
            return res.json({message: "Request deleted."})
        }
    })
    .catch((err) =>  res.json(`Something went wrong, please try again. ${err}`));
};

const newComment = (req, res, next) => {
    const requestId = req.params.id;
    
    // create comment object to push
    const comment = { 
        content: req.body.comment, 
        user: req.body.user,
    }

    Request.findOne({"_id": requestId})
    .then((data) => {
        // add comment to comments aaray of the request object
        data.comments.push(comment);

        data.save()
        .then((data)=>res.json(data))
        .catch((err) => res.json({message: "Comment failed to be added.", error:err}));
    })
    .catch((err) => res.json({Error: err}));
};

const newReply = (req, res, next) => {
    const requestId = req.params.id;
    const commentId = req.body.commentId;

    const reply = {
        content: req.body.reply, 
        replyingTo: req.body.replyingTo, 
        user: req.body.user
    }

    Request.findOne({"_id": requestId})
    .then((data) => {
        const comment = data.comments.find((comment) => comment._id.toString() === commentId);

        // add reply to comment from coments array of the request object
        if(comment) {
            comment.replies.push(reply);
            data.save()
            .then((data)=>res.json(data))
            .catch((err) => res.json({message: "Reply failed to be added.", error:err}));
        }
    })
    .catch((err) => res.json({Error: err}));
};

const newUser = (req, res, next) => {
    User.findOne({ username: req.body.username }).then((data) => {
        // if request is not in db, add it
        if (!data) {
            // create a new user object using the User model and req.body
            const newUser = new User({
                name: req.body.name,
                username: req.body.username,
            })

            // save this object to database
            newUser.save()
            .then((data)=>res.json(data))
            .catch((err) => res.json({Error: err}));
        } else {
            return res.json({message: "User with username already exists"});
        }
    }).catch((err) => res.json(`Something went wrong, please try again. ${err}`));
};

const getUser = (req, res, next) => {
    User.findOne({ username: req.params.username })
    .then((data) => res.json(data))
    .catch((err) =>  res.json({Error: err}));
};

const getAllUsers = (req, res, next) => {
    User.find({})
    .then((data) => res.json(data))
    .catch((err) =>  res.json({Error: err}));
};

module.exports = { newRequest, getAllRequest, getOneRequest, deleteOneRequest, newComment, newReply, getUser, newUser, getAllUsers};