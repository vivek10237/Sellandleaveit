const ContactUs = require('../models/contactusModel');

exports.addContactusTODb = async (req, res, next) => { 
    const contact = new ContactUs({
        name: req.body.name,
        email: req.body.email,
        message: req.body.message,
        hireyou: req.body.hireyou,
        question: req.body.question,
        feedback: req.body.feedback,
        businesssynergy: req.body.business_synergy,
        other: req.body.other
    }); 


    try {
            let result = await contact.save();
            if (result) {
                res.status(201).json({
                    data: result, 
                    success:true, 
                    message:'Your details send successfully we will contact you soon.'
                });
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

