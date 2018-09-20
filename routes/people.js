const router = require('express').Router();
const Person = require('../models/person');

router.post('/', (req, res) => {
  Person.create(req.body)
  .then(person => res.send(person))
  .catch(err => res.status(500).send(err));
});

module.exports = router;
