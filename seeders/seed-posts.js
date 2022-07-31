'use strict';

module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert(
			'posts',
			[
				{
					username: 'Shiv',
					title: 'Loveland pass',
					start_location: '39.663728, -105.879024',
					end_location: '39.670131, -105.879452',
					directions:
						'Drive up I-70 west and take exit 216 right before Silverthorne. Drive up the mountain and as you approach the peak there will be a small parking area to your left. That is the starting point, on your way up you will pass one other parking area, that will be the end point of your run.',
					difficulty: 'Hard',
					description:
						'Short hike, if you want to start closer to parking area but you can also ascend higher for a longer run. There are a lot of trees towards the end of the run, so you must be able to make sharp turns and control your speed.',
					image_url:
						'https://cdn.allsummitcounty.com/images/content/5784_6875_Loveland_Pass_lg.jpg',
				},
				{
					username: 'Shiv',
					title: 'Berthoud pass',
					start_location: '39.798402, -105.777388',
					end_location: '39.810268, -105.778462',
					directions:
						'Drive Up I-40 and right before Winter Park you will see a US Forest Service hut and parking lot, this is the start location and where you will begin your ascend up to the peak of the Continental Divide Trail. The end location is farther down the road.',
					difficulty: 'Hard',
					description:
						'Big mountain, long hike, and very steep terrain. This hike is no joke, however if you can make it through the deep snow it is well worth it. The back bowl of the ridge line faces north and gets very minimal direct sunlight throughout the year so the powder is deep and mostly untouched since because of the hike usually.',
					image_url:
						'https://www.uncovercolorado.com/wp-content/uploads/2020/05/Berthoud-Pass-CO-3.jpg',
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
					start_location: '39.663728, -105.879024',
					end_location: '39.670131, -105.879452',
					directions:
						'Drive up I-70 west and take exit 216 right before Silverthorne. Drive up the mountain and as you approach the peak there will be a small parking area to your left. That is the starting point, on your way up you will pass one other parking area, that will be the end point of your run.',
					difficulty: 'Hard',
					description:
						'Short hike, if you want to start closer to parking area but you can also ascend higher for a longer run. There are a lot of trees towards the end of the run, so you must be able to make sharp turns and control your speed.',
					image_url:
						'https://cdn.allsummitcounty.com/images/content/5784_6875_Loveland_Pass_lg.jpg',
				},
				{
					username: 'Shiv',
					title: 'Berthoud pass',
					start_location: '39.798402, -105.777388',
					end_location: '39.810268, -105.778462',
					directions:
						'Drive Up I-40 and right before Winter Park you will see a US Forest Service hut and parking lot, this is the start location and where you will begin your ascend up to the peak of the Continental Divide Trail. The end location is farther down the road.',
					difficulty: 'Hard',
					description:
						'Big mountain, long hike, and very steep terrain. This hike is no joke, however if you can make it through the deep snow it is well worth it. The back bowl of the ridge line faces north and gets very minimal direct sunlight throughout the year so the powder is deep and mostly untouched since because of the hike usually.',
					image_url:
						'https://www.uncovercolorado.com/wp-content/uploads/2020/05/Berthoud-Pass-CO-3.jpg',
				},
			],
			{}
		);
	},
};
