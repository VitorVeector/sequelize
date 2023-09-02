const LevelController = require('../controllers/LevelController')
const { Router } = require('express')

const router = Router()

router.get('/levels', LevelController.getAllLevel)
router.get('/levels/:id', LevelController.getLevelById)
router.post('/levels', LevelController.createLevel)
router.patch('/levels/:id', LevelController.updateLevel)
router.delete('/levels/:id', LevelController.deleteLevel)

module.exports = router;