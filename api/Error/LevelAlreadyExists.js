class LevelAlreadyExists extends Error{
    constructor(){
        super('Nível já existe')
        this.name = 'LevelAlreadyExists'
    }
}

module.exports = LevelAlreadyExists