const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const checkSchema = new Schema({   
    heartrate: {type: String}
});

const Check = mongoose.model('heartsensors', checkSchema);

module.exports = Check;