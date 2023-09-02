const ClassController = require('../controllers/ClassController')
const { Router } = require('express')

const router = Router()

router.get('/classes', ClassController.getAllClasses)
router.get('/classes/:id', ClassController.getClassById)
router.post('/classes', ClassController.createClass)
router.patch('/classes/:id', ClassController.updateClass)
router.delete('/classes/:id', ClassController.deleteClass)

module.exports = router;