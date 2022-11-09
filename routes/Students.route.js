const { Router } = require('express');
const  { StudentsController } = require('../controllers/Students.controller');

const router = Router();

router.get('/', StudentsController.getStudents);
router.post('/', StudentsController.addStudents);
router.delete('/:studentId', StudentsController.deleteStudents);
router.patch('/:studentId', StudentsController.updateStudents);

module.exports = router;