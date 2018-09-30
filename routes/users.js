const routerUsers = require('express').Router();
const User = require('../models/user');

router.post('/users', (req, res) => {
  User.create(req.body)
  .then(user => res.send(user))
  .catch(err => res.status(500).send(err));
});

module.exports = routerUsers;
