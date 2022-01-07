const { Router } = require('express');
const router = Router();

// * Controllers
const { getSections} = require('../controllers/sections');

// * Routes
router.get('/', getSections);

module.exports = router;