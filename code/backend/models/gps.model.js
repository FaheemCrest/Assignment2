const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const checkSchema = new Schema({   
    gps: {type: String}
});

const Check = mongoose.model('gprs', checkSchema);

module.exports = Check;