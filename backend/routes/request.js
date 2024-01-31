const express = require("express");

// router object to set up routes
const router =  express.Router();

const RequestController =  require('../controllers/request');

router.get('/request', RequestController.getAllRequest);
router.post('/request', RequestController.newRequest);
router.get('/request/:id', RequestController.getOneRequest);
router.delete('/request/:id', RequestController.deleteOneRequest);
router.post('/request/:id/comments', RequestController.newComment);
router.post('/request/:id/replies', RequestController.newReply);
router.get('/user/:username', RequestController.getUser);
router.get('/user', RequestController.getAllUsers);
router.post('/user', RequestController.newUser);

// export to use in server.js
module.exports = router;