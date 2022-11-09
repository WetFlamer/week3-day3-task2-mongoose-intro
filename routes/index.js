const { Router } = require('express');

const router = Router();

router.use('/students', require('./Students.route'));

module.exports = router;
