class UserNotFound extends Error{
    constructor(){
        super('Usuário não encontrado')
        this.name = 'UserNotFound'
    }
}

module.exports = UserNotFound