const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const responseSchema = new Schema({
    uId:{
        type: String,
        required:true
    },
    rId:{
        type: String,
        required: true
    },
    responseText:{
        type: String,
    }
},{timestamps:true});

module.exports = mongoose.model('Response', responseSchema);