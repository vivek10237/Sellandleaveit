const express = require('express');
const router = express.Router();
const registerCon = require('../controller/registerCon'); 
const checkAuth = require('../middleware/check-auth');


router.post('/addUser', registerCon.addRegisterTODb);
router.post('/login', registerCon.getUserLoginTODb);

module.exports = router; 