const UserController = require('../controllers/UserController')
const { Router } = require('express')

const router = Router()

router.get('/users', async (req, res) => {
    try {
        const users = await UserController.getAllUser()
        res.status(200).send(users)
    } catch (error) {
        res.status(500).send(error.message)
    }
})

module.exports = router;