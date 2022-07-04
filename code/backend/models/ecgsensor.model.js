const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const checkSchema = new Schema({   
    ecg: {type: Array}
});

const Check = mongoose.model('ecgsensors', checkSchema);

module.exports = Check;