const router = require('express').Router();

router.get('/signup', (req, res) => {
  Book.create(req.body)
  .then(book => res.send(book))
  .catch(err => res.status(500).send(err));
});

module.exports = router;