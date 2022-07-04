const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const checkSchema = new Schema({   
    emg: {type: Array}
});

const Check = mongoose.model('emgsensors', checkSchema);

module.exports = Check;