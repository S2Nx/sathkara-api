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
    rProvince:{
        type: String,
    },
    rDistrict:{
        type: String,
    },
    rCity:{
        type: String,
    },
    rIsComplete:{
        type: Boolean,
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