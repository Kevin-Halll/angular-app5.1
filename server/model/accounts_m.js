const mongoose = require('mongoose')

const Schema = mongoose.Schema;// Define collection and schema
Account = new Schema({
    studentId: {type: Schema.Types.ObjectId, ref: "Student", }, //ref uses sting name in mongoose.model('StringName', Model)
    account_num: {type: Number},
    bank: {type: String},
    branch: {type: String},
    account_type: {type: String},
    status: {type: String}}, 

    {collection: 'accounts'})
    
    module.exports = mongoose.model('Account', Account)