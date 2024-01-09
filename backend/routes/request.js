const express = require("express");
const multer = require("multer");

// router object to set up routes
const router =  express.Router();
const upload = multer();

const RequestController =  require('../controllers/request');

router.get('/request', RequestController.getAllRequest);
router.post('/request', upload.none(), RequestController.newRequest);
router.get('/request/:id', RequestController.getOneRequest);
router.delete('/request/:id', RequestController.deleteOneRequest);
router.post('/request/:id/comments', RequestController.newComment);
router.post('/request/:id/replies', RequestController.newReply);

// export to use in server.js
module.exports = router;