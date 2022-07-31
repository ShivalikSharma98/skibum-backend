'use strict';

module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert(
			'posts',
			[
				{
					username: 'Shiv',
					title: 'Loveland pass',
					start_location: 'Top',
					end_location: 'Bottom',
					directions: 'Up I-70 before Silverthorne',
					difficulty: 'Hard',
					description: 'Big mountain, short hike, but steep terrain',
					image_url: '',
				},
				{
					username: 'Shiv',
					title: 'Berthoud pass',
					start_location: 'Top',
					end_location: 'Bottom',
					directions: 'Up I-40 before Winter Park',
					difficulty: 'Hard',
					description: 'Big mountain, long hike, and very steep terrain',
					image_url: '',
				},
				{
					username: 'Esin',
					title: 'Austin',
					start_location: 'Top',
					end_location: 'Bottom',
					directions: 'Texas',
					difficulty: 'Medium',
					description: 'Big upcoming city',
					image_url: '',
				},
				{
					username: 'Zoe',
					title: 'Somewhere in Iowa',
					start_location: 'Top',
					end_location: 'Bottom',
					directions: 'Iowa',
					difficulty: 'Hard',
					description: 'Biking up and down hills',
					image_url: '',
				},
				{
					username: 'Tom',
					title: 'Los Angeles',
					start_location: 'Top',
					end_location: 'Bottom',
					directions: 'California',
					difficulty: 'Medium',
					description: 'Chill vibes super woke',
					image_url: '',
				},
			],
			{}
		);
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete(
			'People',
			[
				{
					username: 'Shiv',
					title: 'Loveland pass',
					start_location: 'Top',
					end_location: 'Bottom',
					directions: 'Up I-70 before Silverthorne',
					difficulty: 'Hard',
					description: 'Big mountain, short hike, but steep terrain',
					image_url: '',
				},
				{
					username: 'Shiv',
					title: 'Berthoud pass',
					start_location: 'Top',
					end_location: 'Bottom',
					directions: 'Up I-40 before Winter Park',
					difficulty: 'Hard',
					description: 'Big mountain, long hike, and very steep terrain',
					image_url: '',
				},
				{
					username: 'Esin',
					title: 'Austin',
					start_location: 'Top',
					end_location: 'Bottom',
					directions: 'Texas',
					difficulty: 'Medium',
					description: 'Big upcoming city',
					image_url: '',
				},
				{
					username: 'Zoe',
					title: 'Somewhere in Iowa',
					start_location: 'Top',
					end_location: 'Bottom',
					directions: 'Iowa',
					difficulty: 'Hard',
					description: 'Biking up and down hills',
					image_url: '',
				},
				{
					username: 'Tom',
					title: 'Los Angeles',
					start_location: 'Top',
					end_location: 'Bottom',
					directions: 'California',
					difficulty: 'Medium',
					description: 'Chill vibes super woke',
					image_url: '',
				},
			],
			{}
		);
	},
};
