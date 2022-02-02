const express = require('express');
const router = express.Router();
const sections = require('./sections');
const tecnologies = require('./tecnologies');
const projects = require('./projects');
const timeline = require('./timeline');

// * Routes
router.use('/sections', sections);
router.use('/tecnologies', tecnologies);
router.use('/projects', projects);
router.use('/timeline', timeline);

router.get('/', (req, res) => {
  res.send('Hello World');
});

module.exports = router;