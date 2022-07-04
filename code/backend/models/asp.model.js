const mongoose = require('mongoose');

const Schema = mongoose.Schema;
console.log("happening");
const dataCollectionUnitSchema = new Schema({   
    
    nadeName: {type: String},
    attackProbability: {type:String},
    attackImpact: {type:String},
    attackRisk: {type:String},
    cvssBaseScore: {type:String}
});

const asp = mongoose.model('asp', dataCollectionUnitSchema);

module.exports = asp;