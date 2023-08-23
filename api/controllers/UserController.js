const database = require('../models') 

class UserController{
    static async getAllUser(){
        try {
            const users = await database.Users.findAll()
            return users
        } catch (err) {
            throw err
        }
    }
}

module.exports = UserController
