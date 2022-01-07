const express = require('express');
const router = express.Router();
const sections = require('./sections');

// * Routes
router.use('/sections', sections);

router.get('/', (req, res) => {
  res.send('Hello World');
});

module.exports = router;