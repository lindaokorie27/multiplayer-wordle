const newFeedback = (req, res, next) => {
    res.json({message: "POST new feedack"});
};

const getAllFeedback = (req, res, next) => {
    res.json({message: "GET new feedack"});

    // retrieve all the database entries and return the json
    
};

const getOneFeedback = (req, res, next) => {
    res.json({message: "GET one feedack"});
};

const deleteOneFeedback = (req, res, next) => {
    res.json({message: "DELETE one feedack"});
};

const newComment = (req, res, next) => {
    res.json({message: "POST one feedack"});
};

const newReply = (req, res, next) => {
    res.json({message: "POST one feedack"});
};

module.exports = { newFeedback, getAllFeedback, getOneFeedback, deleteOneFeedback, newComment, newReply};