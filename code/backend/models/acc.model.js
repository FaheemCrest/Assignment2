const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const checkSchema = new Schema({   
    acc: {type: String}
});

const Check = mongoose.model('accsensors', checkSchema);

module.exports = Check;