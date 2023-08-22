'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert('Users', [{
            name: 'John Doe',
            active: true,
            email: 'johncraft@email.com',
            role: 'estudante',
            createdAt: new Date(),
            updatedAt: new Date()
        },{
            name: 'João Silva',
            active: true,
            email: 'joao.silva@example.com',
            role: 'estudante',
            createdAt: new Date(),
            updatedAt: new Date()
        },{
            name: 'Maria Santos',
            active: false,
            email: 'maria.santos@example.com',
            role: 'professor',
            createdAt: new Date(),
            updatedAt: new Date()
        },{
            name: 'Lucas Oliveira',
            active: true,
            email: 'lucas.oliveira@example.com',
            role: 'estudante',
            createdAt: new Date(),
            updatedAt: new Date()
        },{
            name: 'Ana Pereira',
            active: true,
            email: 'ana.pereira@example.com',
            role: 'estudante',
            createdAt: new Date(),
            updatedAt: new Date()
        },{
            name: 'Pedro Costa',
            active: true,
            email: 'pedro.costa@example.com',
            role: 'estudante',
            createdAt: new Date(),
            updatedAt: new Date()
        }
        
    ], {});

    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete('Users', null, {});
    }
};
