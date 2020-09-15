const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
  res.send('<h1 id="page-title">My Page</h1>');
});

module.exports = router;
