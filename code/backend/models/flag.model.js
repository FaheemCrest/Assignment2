const mongoose = require('mongoose');

const Schema = mongoose.Schema;
console.log("happening");
const dataCollectionUnitSchema = new Schema({   
    temperature: {type: String},
    heartrate: {type: String},
    gps: {type: String},
    ecg: {type: String},
    emg: {type: String},
    acc: {type: String}

});

const new_flag = mongoose.model('flagchecks', dataCollectionUnitSchema);

module.exports = new_flag;