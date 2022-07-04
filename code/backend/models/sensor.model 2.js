const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const sensorSchema = new Schema({   
    sensorName: {type: String},
    sensorValue: {type: String}
});

const Sensor = mongoose.model('post', sensorSchema);

module.exports = Sensor;