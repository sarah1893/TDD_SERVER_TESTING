const express = require('express');
const router = express.Router();


router.get('/', async (req, res) => {
  res.send('<h1>Hello Testing World!</h1>');
});

module.exports = router;
