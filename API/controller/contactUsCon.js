const ContactUs = require('../models/contactusModel');
const Register = require('../models/registerModel');
const Activitylog = require('../models/useractivityModel');
exports.addContactusTODb = async (req, res, next) => { 
    const contact = new ContactUs({
        name: req.body.name,
        email: req.body.email,
        message: req.body.message,
        hireyou: req.body.hireyou,
        question: req.body.question,
        feedback: req.body.feedback,
        businesssynergy: req.body.business_synergy,
        other: req.body.other,
        datetime: req.body.datetime,
        userid: req.body.userid
    }); 


    try {
            let result = await contact.save();
            if (result) {
                res.status(201).json({
                    data: result, 
                    success:true, 
                    message:'Your details send successfully we will contact you soon.'
                });

             /*--- User activity log ---*/

             let userLogid = await Register.findOne({ _id: req.body.userid });
             const userLog = new Activitylog({
                 userid: userLogid._id,
                 name: userLogid.name,
                 action: 'Contact',
                 datetime: new Date(),
                 activitydata: req.body.message
             }); 
 
             let Logresult =  userLog.save();
             if (Logresult) {
                 console.log('Activity Store');
             }else{
                 console.log('No store');
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


exports.getUserContactListTODb = (req, res, next) => {    
    ContactUs.find({}).then(result => {
        console.log('xxx x xxx', result);
        if (result){
            res.status(201).json({
                data: result
            });

        }
    }).catch(err => {
        console.log('xxx x xxx', err);
    });
}



exports.delUserContactListTODb = (req, res, next) => {
    console.log('deleteNode:',req);
    ContactUs.deleteOne({_id:req.params.id}).then(result => {

        if (result) {
            res.status(201).json({
                data: result,
                success:true,
                message: 'User contact us data has been successfully deleted.'
            });

        }

    }).catch(err => {
        res.status(401).json({
            data: err,
            success: false,
            message: 'User contact us not delete'
        });
        console.log('xxx x xxx', err);
    });
} 