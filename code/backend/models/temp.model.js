const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const checkSchema = new Schema({   
    temp: {type: String}
});

const Check = mongoose.model('tempsensors', checkSchema);

module.exports = Check;