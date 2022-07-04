const router = require('express').Router();
let Check = require('../models/check.model');

router.route('/').get((req, res) => {
  console.log("happening find ing ");
  Check.find()
    .then(countnew => res.json(countnew))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
    console.log("happening find ing ");
    Check.findById(req.params.id)
      .then(countnew => res.json(countnew))
      .catch(err => res.status(400).json('Error: ' + err));
  });

router.route('/add').post((req, res) => {
    const count = req.body.count;
    const newCheck = new Check({
      count,
    });
  
    newCheck.save()
    .then(() => res.json('check added!'))
    .catch(err => res.status(400).json('Error: ' + err));
  });

module.exports = router;