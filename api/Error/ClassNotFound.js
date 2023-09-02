class ClassNotFound extends Error{
    constructor(){
        super('Turma não foi encontrada')
        this.name = 'ClassNotFound'
    }
}

module.exports = ClassNotFound