const mongoose = require('mongoose');

const Schema = mongoose.Schema;
console.log("happening");
const dataCollectionUnitSchema = new Schema({   
    
    vulnerability: {type: String},
    impactScore: {type:String},
    exploitabilityScore: {type:String},
    cvssBaseScore: {type:String}
});

const controlcenter = mongoose.model('controlcenter', dataCollectionUnitSchema);

module.exports = controlcenter;