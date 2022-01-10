const { Router } = require('express');
const router = Router();
const tecnologies = require('../models/tecnologies');

// * Controllers
const { getTecnologies, postTecnologies } = require('../controllers/tecnologies');

//* Routes
router.get('/', getTecnologies);
router.post('/', postTecnologies);

module.exports = router;
