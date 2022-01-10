const { Router } = require('express');
const router = Router();
const Section = require('../models/sections');

// * Controllers
const { getSections} = require('../controllers/sections');

// * Routes
router.get('/', getSections);

module.exports = router;