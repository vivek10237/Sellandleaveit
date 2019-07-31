const Register = require('../models/registerModel');
const jwt = require('jsonwebtoken');

exports.addRegisterTODb = async (req, res, next) => { 
    const reg = new Register({
        name: req.body.name,
        email: req.body.email,
        username: req.body.username,
        password: req.body.password,
        investor: req.body.investor,
        financial: req.body.financial,
        professor: req.body.professor,
        tell_us_more: req.body.tell_us_more
    }); 


    try {
            let user = await Register.findOne({ email: req.body.email});
            console.log('user:', user);
            if(user){

                res.status(201).json({
                    data: user, 
                    success:false, 
                    message:'User already exist !!'
                });
            }else{
                let result = await reg.save();
                    if (result) {
                        res.status(201).json({
                            data: result, 
                            success:true, 
                            message:'User Signup Successfully !!'
                        });
                    }
            }

    } catch (err) {

        res.status(401).json({
            data: err,
            success: false,
            message: 'Backend error'

        });
        console.log('eeeeeeeeeeeee eeeeeeeeeee ', err)
    }
}


exports.getUserLoginTODb = async (req, res, next) => {
    console.log('xxxxxxxxxx xxxxx', req.body.email);
    
    Register.findOne({ email: req.body.email.email, password: req.body.email.password })
    .then(data => {
        if (data) {
            console.log('login data', data);
            const token = jwt.sign({
                email: data.email,
                _id: data._id
            },
                '@' + data._id + '-' + data.email,
                {
                    expiresIn: "1h"
                });
            res.status(201).json({
                message: "Loged In",
                token: token
            });
        } else {
            res.status(201).json({
                message: "Unauthorised",
            });
        }
    }).catch(err => {
        res.status(400).json({
            message: err,
        });
    })
}
