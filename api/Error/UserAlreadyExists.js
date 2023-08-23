class UserAlreadyExists extends Error{
    constructor(){
        super('Email já está cadastrado')
        this.name = 'UserNotFound'
    }
}

module.exports = UserAlreadyExists