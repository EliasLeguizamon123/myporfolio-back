const { Router } = require('express');
const router = Router();
const tecnologies = require('../models/tecnologies');

// * Controllers
const { getTecnologies } = require('../controllers/tecnologies');

//* Routes
router.get('/', getTecnologies);

module.exports = router;
