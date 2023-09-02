 const database = require('../models')
const LevelNotFound = require('../Error/LevelNotFound')
const LevelAlreadyExists = require('../Error/LevelAlreadyExists')

class LevelController {
    static async getAllLevel(req, res) {
        try {
            const levels = await database.Levels.findAll()
            res.status(200).send(levels)
            return levels
        } catch (error) {
            res.status(500).send(error.message)
        }
    }

    static async getLevelById(req, res) {
        try {
            const { id } = req.params
            const level = await database.Levels.findOne({
                where: {
                    id: id
                }
            })
            if (!level) {
                res.status(404).send(new LevelNotFound().message)
            } else {
                res.status(200).send(level)
            }
        } catch (error) {
            res.status(500).send(error.message)
        }
    }

    static async createLevel(req, res) {
        try {
            const data = req.body
            const level = await database.Levels.findOne({
                where: {
                    email: data.email
                }
            })
            if (level) {
                res.status(404).send(new LevelAlreadyExists().message)
            } else {
                const newLevel = await database.Levels.create(data)
                res.status(201).send(newLevel)
            }
        } catch (error) {
            res.status(500).send(error.message)
        }
    }

    static async updateLevel(req, res) {
        try {
            const { id } = req.params
            const body = req.body
            const level = await database.Levels.findOne({
                where: {
                    id: id
                }
            })
            if (!level) {
                res.status(404).send(new LevelNotFound().message)
            } else {
                await level.update(body, {
                    where: {
                        id: id
                    }
                })
                res.status(201).send(level)
            }
        } catch (error) {
            res.status(500).send(error.message)
        }
    }

    static async deleteLevel(req, res) {
        try {
            const id = req.params.id
            const level = await database.Levels.findOne({
                where: {
                    id: id
                }
            })
            if (!level) {
                res.status(404).send(new LevelNotFound().message)
            } else {
                await database.Levels.destroy({
                    where: {
                        id: id
                    }
                })
                res.status(201).send(`O nível: ${level.name} foi deletado`)
            }
        } catch (error) {
            res.status(500).send(error.message)
        }
    }
}

module.exports = LevelController
