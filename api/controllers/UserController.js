const database = require('../models')
const UserNotFound = require('../Error/UserNotFound')
const UserAlreadyExists = require('../Error/UserAlreadyExists')

class UserController {
    static async getAllUser(req, res) {
        try {
            const users = await database.Users.findAll()
            res.status(200).send(users)
            return users
        } catch (error) {
            res.status(500).send(error.message)
        }
    }

    static async getUserById(req, res) {
        try {
            const { id } = req.params
            const user = await database.Users.findOne({
                where: {
                    id: id
                }
            })
            if (!user) {
                res.status(404).send(new UserNotFound().message)
            } else {
                res.status(200).send(user)
            }
        } catch (error) {
            res.status(500).send(error.message)
        }
    }

    static async createUser(req, res) {
        try {
            const data = req.body
            const user = await database.Users.findOne({
                where: {
                    email: data.email
                }
            })
            if (user) {
                res.status(404).send(new UserAlreadyExists().message)
            } else {
                const newUser = await database.Users.create(data)
                res.status(201).send(newUser)
            }
        } catch (error) {
            res.status(500).send(error.message)
        }
    }

    static async updateUser(req, res) {
        try {
            const { id } = req.params
            const body = req.body
            const user = await database.Users.findOne({
                where: {
                    id: id
                }
            })
            if (!user) {
                res.status(404).send(new UserNotFound().message)
            } else {
                await user.update(body, {
                    where: {
                        id: id
                    }
                })
                res.status(201).send(user)
            }
        } catch (error) {
            res.status(500).send(error.message)
        }
    }

    static async deleteUser(req, res) {
        try {
            const id = req.params.id
            const user = await database.Users.findOne({
                where: {
                    id: id
                }
            })
            if (!user) {
                res.status(404).send(new UserNotFound().message)
            } else {
                await database.Users.destroy({
                    where: {
                        id: id
                    }
                })
                res.status(201).send(`O usuário: ${user.name} foi deletado`)
            }
        } catch (error) {
            res.status(500).send(error.message)
        }
    }
}

module.exports = UserController
