class LevelNotFound extends Error{
    constructor(){
        super('Nível não foi encontrado')
        this.name = 'LevelNotFound'
    }
}

module.exports = LevelNotFound