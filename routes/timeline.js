const { Router } = require('express');
const router = Router();

//* Controllers
const { getTimeline, postJob } = require('../controllers/timeline');

//* Routes
router.get('/', getTimeline);
router.post('/', postJob);

module.exports = router;