const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const checkSchema = new Schema({   
    count: {type: String}
});

const Check = mongoose.model('postvalue', checkSchema);

module.exports = Check;