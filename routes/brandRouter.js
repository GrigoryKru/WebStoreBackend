const Router = require('express');
const brandController = require('../controllers/brandController');
const checkRole = require('../middleware/checkRoleMiddleware');

const router = new Router();

router.post('/', checkRole('ADMIN'), brandController.create);
router.get('/', brandController.getAll);

module.exports = router;
