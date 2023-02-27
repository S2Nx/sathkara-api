const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const requestSchema = new Schema({
    pharmaceutical:{
        type: String,
        required:true,
    },
    rCategory:{
        type: String,
    },
    rDescription:{
        type: String,
    },
    rExpDate:{
        type: Date,
    },
    rLocation:{
        type: String,
    },
    rIsComplete:{
        type: String,
        required: true
    },
    rUrgency:{
        type: String,
    },
    uId: {
        type: String,
        required: true
    }
},{timestamps:true});

module.exports = mongoose.model('Request', requestSchema);