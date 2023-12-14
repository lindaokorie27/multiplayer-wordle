const express = require("express");

// router object to set up routes
const router =  express.Router();

const feedbackController =  require('../controllers/feedback');

router.get('/feedback', feedbackController.getAllFeedback);
router.post('/feedback', feedbackController.newFeedback);
router.get('/feedback/:id', feedbackController.getOneFeedback);
router.delete('/feedback/:id', feedbackController.deleteOneFeedback);
router.post('/feedback/:id/comments', feedbackController.newComment);
router.post('/feedback/:id/comments/:id/replies', feedbackController.newReply);

// export to use in server.js
module.exports = router;