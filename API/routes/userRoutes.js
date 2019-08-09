const express = require('express');
const router = express.Router();
const registerCon = require('../controller/registerCon'); 
const contactUsCon = require('../controller/contactUsCon'); 
const profileUpdateCon = require('../controller/updateprofileCon'); 
const adminUserlistCon = require('../controller/adminUserlist'); 
const adminActivityLoglistCon = require('../controller/activityLogCon'); 
// const checkAuth = require('../middleware/check-auth');

router.post('/addUser', registerCon.addRegisterTODb);
router.post('/login', registerCon.getUserLoginTODb);
router.post('/contactus', contactUsCon.addContactusTODb);
router.post('/updateProfile', profileUpdateCon.updateProfileTODb);
router.get('/userlist', adminUserlistCon.getUserTODb);
router.post('/userEditInfo', adminUserlistCon.editUserTODb);
router.delete('/delUser/:id', adminUserlistCon.delUserTODb);
router.get('/userContactlist', contactUsCon.getUserContactListTODb);
router.delete('/delUserContact/:id', contactUsCon.delUserContactListTODb);
router.get('/userActivityLog', adminActivityLoglistCon.getUserAvtivityLogListTODb);
module.exports = router; 