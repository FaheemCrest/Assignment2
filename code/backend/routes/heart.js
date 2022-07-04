const router = require('express').Router();

const url = process.env.ADDPATH;
url1 = url + '/models/heart.model.js'
let Check = require(url1);

router.route('/').get((req, res) => {
  console.log("happening find ing ");
  Check.find()
    .then(countnew => res.json(countnew))
    .catch(err => res.status(400).json('Error: ' + err));
});
module.exports = router;