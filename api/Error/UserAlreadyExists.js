class UserAlreadyExists extends Error{
    constructor(){
        super('Email já está cadastrado')
        this.name = 'UserAlreadyExists'
    }
}

module.exports = UserAlreadyExists