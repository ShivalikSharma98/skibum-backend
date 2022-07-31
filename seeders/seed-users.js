'use strict';

module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert(
			'users',
			[
				{
					name: 'Shiv Sharma',
					email: 'shiv@email.com',
					username: 'Shiv',
					password: 'password',
				},
				{
					name: 'Esin Saribudak',
					email: 'esin@email.com',
					username: 'Esin',
					password: 'password',
				},
				{
					name: 'Zoe Peterson',
					email: 'zoe@email.com',
					username: 'Zoe',
					password: 'password',
				},
				{
					name: 'Tom Kolsrud',
					email: 'tom@email.com',
					username: 'Tom',
					password: 'password',
				},
			],
			{}
		);
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete(
			'users',
			[
				{
					name: 'Shiv Sharma',
					email: 'shiv@email.com',
					username: 'Shiv',
					password: 'password',
				},
				{
					name: 'Esin Saribudak',
					email: 'esin@email.com',
					username: 'Esin',
					password: 'password',
				},
				{
					name: 'Zoe Peterson',
					email: 'zoe@email.com',
					username: 'Zoe',
					password: 'password',
				},
				{
					name: 'Tom Kolsrud',
					email: 'tom@email.com',
					username: 'Tom',
					password: 'password',
				},
			],
			{}
		);
	},
};
