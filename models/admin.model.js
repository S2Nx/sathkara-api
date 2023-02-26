const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const adminSchema = new Schema({
    aName:{
        type: String,
        required:true,
    },
    aEmail:{
        type: String,
        required:true,
    },
    aPassword:{
        type: String,
        required:true,
    },
},{timestamps:true});

module.exports = mongoose.model('Admin', adminSchema);