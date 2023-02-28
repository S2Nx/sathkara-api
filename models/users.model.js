const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    uName:{
        type: String,
        required:true,
    },
    uEmail:{
        type: String,
        required:true,
    },
    uPassword:{
        type: String,
        required:true,
    },
    uPhone:{
        type: String,
    },
    uCity:{
        type: String,
    },
    uWhatsapp:{
        type: String,
    },
    uFacebook:{
        type: String,
    },
    uInstagram:{
        type: String,
    },
},{timestamps:true});

module.exports = mongoose.model('User', userSchema);