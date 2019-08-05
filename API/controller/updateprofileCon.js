const updateProfile = require('../models/registerModel');
const jwt = require('jsonwebtoken');
exports.updateProfileTODb = async (req, res, next) => {
    
    try {
        const result = await updateProfile.findByIdAndUpdate({ _id: req.body.id, }, {
            username: req.body.username,
            email: req.body.email,
            name: req.body.name,
        });

        const token = jwt.sign({
            email: req.body.email,
            name: req.body.name,
            username:  req.body.username,
            role:  req.body.role,
            _id:  req.body.id
        },'@' + req.body.id + '-' + req.body.email,
            {
                expiresIn: "1h"
            });

        if (result) {
            res.status(201).json({
                data: result,
                success: true,
                token: token,
                message: 'Profile Updated successfully.'
            });
        }
    } catch (err) {
        res.status(401).json({
            data: err,
            success: false,
            message: 'Something going wrong please check.'
        });
        console.log('eeeeeeeeeeeee eeeeeeeeeee ', err)
    }

}