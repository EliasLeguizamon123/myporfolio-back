const express = require('express');
const router = express.Router();
const sections = require('./sections');
const tecnologies = require('./tecnologies');

// * Routes
router.use('/sections', sections);
router.use('/tecnologies', tecnologies);

router.get('/', (req, res) => {
  res.send('Hello World');
});

module.exports = router;