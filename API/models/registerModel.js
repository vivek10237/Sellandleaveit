const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const regSchema = new Schema({
    name:String,
    email: String,
    username: String,
    password: String,
    investor:String,
    financial:String,
    professor:String,
    tell_us_more:String,
    role:String

});
module.exports = mongoose.model('Register', regSchema);  