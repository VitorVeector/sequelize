const database = require('../models')
const ClassNotFound = require('../Error/ClassNotFound')

class ClassController {
    static async getAllClasses(req, res) {
        try {
            const classStudyes = await database.Classes.findAll()
            res.status(200).send(classStudyes)
            return classStudyes
        } catch (error) {
            res.status(500).send(error.message)
        }
    }

    static async getClassById(req, res) {
        try {
            const { id } = req.params
            const classStudy = await database.Classes.findOne({
                where: {
                    id: id
                }
            })
            if (!classStudy) {
                res.status(404).send(new ClassNotFound().message)
            } else {
                res.status(200).send(classStudy)
            }
        } catch (error) {
            res.status(500).send(error.message)
        }
    }

    static async createClass(req, res) {
        try {
            const data = req.body
            const newClass = await database.Classes.create(data)
            res.status(201).send(newClass)
        } catch (error) {
            res.status(500).send(error.message)
        }
    }

    static async updateClass(req, res) {
        try {
            const { id } = req.params
            const body = req.body
            const classStudy = await database.Classes.findOne({
                where: {
                    id: id
                }
            })
            if (!classStudy) {
                res.status(404).send(new ClassNotFound().message)
            } else {
                await classStudy.update(body, {
                    where: {
                        id: id
                    }
                })
                res.status(201).send(classStudy)
            }
        } catch (error) {
            res.status(500).send(error.message)
        }
    }

    static async deleteClass(req, res) {
        try {
            const { id } = req.params
            const classStudy = await database.Classes.findOne({
                where: {
                    id: id
                }
            })
            if (!classStudy) {
                res.status(404).send(new ClassNotFound().message)
            } else {
                await database.Classes.destroy({
                    where: {
                        id: id
                    }
                })
                const teacher = await database.Users.findOne({
                    where: {
                        id: classStudy.teacher_id
                    }
                })
                // Fazer verificação 
                res.status(201).send(`A turma do professor: ${teacher.name} foi deletada!`)
            }
        } catch (error) {
            res.status(500).send(error.message)
        }
    }
}

module.exports = ClassController
