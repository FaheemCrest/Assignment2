const router = require('express').Router();

const url = process.env.ADDPATH;
console.log("path24");
console.log(url);
console.log(url);
url1 = url + '/models/commandcenter.model.js'

let Check = require(url1);


//console.log(url);
router.route('/').get((req, res) => {
  console.log("happening find ing ");
  Check.find()
    .then(countnew => res.json(countnew))
    .catch(err => res.status(400).json('Error: ' + err));
});
module.exports = router;