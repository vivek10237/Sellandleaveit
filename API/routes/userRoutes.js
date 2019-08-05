const express = require('express');
const router = express.Router();
const registerCon = require('../controller/registerCon'); 
const contactUsCon = require('../controller/contactUsCon'); 
const profileUpdateCon = require('../controller/updateprofileCon'); 
const adminUserlistCon = require('../controller/adminUserlist'); 
// const checkAuth = require('../middleware/check-auth');

router.post('/addUser', registerCon.addRegisterTODb);
router.post('/login', registerCon.getUserLoginTODb);
router.post('/contactus', contactUsCon.addContactusTODb);
router.post('/updateProfile', profileUpdateCon.updateProfileTODb);
router.get('/userlist', adminUserlistCon.getUserTODb);
router.post('/userEditInfo', adminUserlistCon.editUserTODb);

module.exports = router; 