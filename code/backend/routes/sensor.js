const router = require('express').Router();
let Sensor = require('../models/sensor.model');

router.route('/').get((req, res) => {
  console.log("happening");
  Sensor.find()
    .then(sensor => res.json(sensor))
    .catch(err => res.status(400).json('Error: ' + err));
});
router.route('/:id').get((req, res) => {
  Sensor.findById(req.params.id)
    .then(sensor => res.json(sensor))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const sensorName = req.body.sensorName;
  const sensorValue = req.body.sensorValue;

  const newSensor = new Sensor({
    sensorName,
    sensorValue,
  });

  newSensor.save()
  .then(() => res.json('Sensor added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});


module.exports = router;