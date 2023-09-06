const UserController = require('../controllers/UserController')
const { Router } = require('express')

const router = Router()

// Users
router.get('/users', UserController.getAllUser)
router.get('/users/:id', UserController.getUserById)
router.post('/users', UserController.createUser)
router.patch('/users/:id', UserController.updateUser)
router.delete('/users/:id', UserController.deleteUser)

// Users -> Enrollments
router.get('/users/:studentId/enrollments/:enrollmentId', UserController.getEnrollment)
router.get('/users/:studentId/enrollments/', UserController.getAllEnrollment)
router.post('/users/:studentId/enrollments/', UserController.createEnrollment)

module.exports = router;