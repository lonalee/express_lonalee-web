const router = require('express').Router();
const Book = require('../models/books');

router.post('/books', (req, res) => {
  Book.create(req.body)
  .then(book => res.send(book))
  .catch(err => res.status(500).send(err));
});

module.exports = router;