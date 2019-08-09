const Register = require('../models/registerModel');
const Activitylog = require('../models/useractivityModel');
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
        tell_us_more: req.body.tell_us_more,
        role: req.body.role,
        datetime: req.body.datetime
    }); 



    try {
            let user = await Register.findOne({ email: req.body.email});
            console.log('user:', user);
            if(user){

                res.status(201).json({
                    data: user, 
                    success:false, 
                    message:'Email already exist !!'
                });
            }else{
                let result = await reg.save();
                    if (result) {
                        res.status(201).json({
                            data: result, 
                            success:true, 
                            message:'User Signup Successfully !!'
                        });

                        /*--- User activity log ---*/

                        let userLogid = await Register.findOne({ email: req.body.email});
                        const userLog = new Activitylog({
                            userid: userLogid._id,
                            name: userLogid.name,
                            action: 'SignUp',
                            datetime: new Date(),
                            activitydata: 'Sign-up with email:'+userLogid.email
                        }); 
            
                        let Logresult =  userLog.save();
                        if (Logresult) {
                            console.log('Activity Store');
                        }else{
                            console.log('No store');
                        }
                        

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

        console.log('logindata:', data);
        if (data) {
            const userrole = data.role;
            const token = jwt.sign({
                // email: data.email,
                // name: data.name,
                // username: data.username,
                // role: data.role,
                data:data,
               // _id: data._id
            },
                '@' + data._id + '-' + data.email,
                {
                    expiresIn: "1h"
                });
            res.status(201).json({
                message: "Loged In",
                role: userrole,
                email: data.email,
                token: token,
                success: true 
            });

              
            /*--- User activity log ---*/

            const userLog = new Activitylog({
                userid: data._id,
                name: data.name,
                action: 'SignIn',
                datetime: new Date(),
                activitydata: 'Sign-in with email:'+data.email
            }); 

            let Logresult =  userLog.save();
            if (Logresult) {
                console.log('Activity Store');
            }else{
                console.log('No store');
            }

        } else {
            res.status(201).json({
                message: "Invalid email and password please try again.",
                success: false 
            });
        }
    }).catch(err => {
        res.status(401).json({
            message: 'Invalid user',
            success:false
        });
    })
}
