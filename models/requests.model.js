const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const requestSchema = new Schema({
    pharmaceutical:{
        type: String,
        required:true,
    },
    category:{
        type: String,
    },
    description:{
        type: String,
    },
    expDate:{
        type: Date,
    },
    location:{
        type: String,
    },
    isComplete:{
        type: String,
        required: true
    },
    urgency:{
        type: String,
    },
    uId: {
        type: String,
        required: true
    }
},{timestamps:true});

module.exports = mongoose.model('Request', requestSchema);