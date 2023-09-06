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

    //Enrollments
    static async getEnrollment(req, res) {
        try {
            const { studentId, enrollmentId } = req.params
            const enrollment = await database.Enrollments.findOne({
                where: {
                    id: enrollmentId,
                    student_id: studentId
                }
            })
            if (!enrollment) {
                res.status(404).send(new Error())
            }
            res.status(200).send(enrollment)
        } catch (err) {
            res.status(500).send(err.message)
        }
    }

    static async getAllEnrollment(req, res) {
        try {
            const { studentId } = req.params
            const enrollment = await database.Enrollments.findAll({
                where: {
                    student_id: studentId
                }
            })
            if (!enrollment) {
                res.status(404).send(new Error())
            }
            res.status(200).send(enrollment)
        } catch (err) {
            res.status(500).send(err.message)
        }
    }

    static async createEnrollment(req, res) {
        try {
            const { studentId } = req.params
            const data = req.body
            const newEnrollment = await database.Enrollments.create({ ...data, student_id: studentId })
            res.status(201).send(newEnrollment)
        } catch (err) {
            res.status(500).send(err.message)
        }
    }

    static async updateEnrollment(req, res) {
        try {
            const data = req.body
            const { studentId, enrollmentId } = req.params
            const enrollment = await database.Enrollments.findOne({
                where: {
                    id: enrollmentId,
                    student_id: studentId
                }
            })
            if (!enrollment) {
                res.status(404).send(new UserNotFound().message)
            } else {
                await database.Enrollments.update(data, {
                    where: {
                        id: enrollmentId,
                        student_id: studentId
                    }
                })
            }

        } catch (err) {
            res.status(500).send(err.message)
        }
    }
}

module.exports = UserController
