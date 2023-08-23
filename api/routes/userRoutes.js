const UserController = require('../controllers/UserController')
const { Router } = require('express')

const UserNotFound = require('../Error/UserNotFound')
const UserAlreadyExists = require('../Error/UserAlreadyExists')

const router = Router()

router.get('/users', UserController.getAllUser)
router.get('/users/:id', UserController.getUserById)
router.post('/users', UserController.createUser)
router.patch('/users/:id', UserController.updateUser)
router.delete('/users/:id', UserController.deleteUser)

module.exports = router;