const { Router } = require('express');
const router = Router();

//* Controllers
const { getProjects, getProject, postProject } = require('../controllers/projects');

//* Routes
router.get('/', getProjects);
router.get('/:id', getProject);
router.post('/', postProject);

module.exports = router;