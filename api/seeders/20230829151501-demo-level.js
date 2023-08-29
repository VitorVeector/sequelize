'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert('Levels', [{
			level_descrip: 'básico',
			createdAt: new Date(),
			updatedAt: new Date()
		},{
			level_descrip: 'intermediário',
			createdAt: new Date(),
			updatedAt: new Date()
		},{
			level_descrip: 'avançado',
			createdAt: new Date(),
			updatedAt: new Date()
		}], {});
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete('Levels', null, {});
		
	}
};
