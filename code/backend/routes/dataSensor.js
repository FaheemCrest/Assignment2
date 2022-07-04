const router = require('express').Router();
let Check = require('../models/dataCollectionUnit.model');

router.route('/').get((req, res) => {
  console.log("happening find ing ");
  Check.find()
    .then(countnew => res.json(countnew))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    console.log("happening posting");
    const vulnerability = req.body.vulnerability;
    const impactScore = req.body.impactScore;
    const exploitabilityScore = req.body.exploitabilityScore;
    const cvssBaseScore = req.body.cvssBaseScore;
    const newCheck = new Check({
        vulnerability,
        impactScore,
        exploitabilityScore,
        cvssBaseScore,
    });
    newCheck.save()
    .then(() => res.json('Added values'))
    .catch(err => res.status(400).json('Error: ' + err));
  });
module.exports = router;