const mongoose = require('mongoose')

const Schema = mongoose.Schema;// Define collection and schemalet 
Student = new Schema({
    // accountId: {type: Schema.Types.ObjectId, ref: "Account"},
    name: {type: String},
    email: {type: String},
    cohort: {type: String},
    phoneNumber: {type: Number}}, 
    {
        collection: 'students'
})
    
    module.exports = mongoose.model('Student', Student)