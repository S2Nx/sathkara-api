const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const requestSchema = new Schema({
    pharmaceutical:{
        type: String,
        required:true,
    },
    pCategory:{
        type: String,
    },
    pDescription:{
        type: String,
    },
    pExpDate:{
        type: Date,
    },
    pLocation:{
        type: String,
    },
    pIsComplete:{
        type: String,
        required: true
    },
    pUrgency:{
        type: String,
    },
    uId: {
        type: String,
        required: true
    }
},{timestamps:true});

module.exports = mongoose.model('Request', requestSchema);