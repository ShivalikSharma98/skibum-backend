'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class post extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate({ user }) {
			// define association here
			this.belongsTo(user, { foreignKey: 'username' });
		}
	}
	post.init(
		{
			username: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			title: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			start_location: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			end_location: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			directions: {
				type: DataTypes.STRING(1500),
				allowNull: false,
			},
			difficulty: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			description: {
				type: DataTypes.STRING(1500),
				allowNull: false,
			},
			image_url: {
				type: DataTypes.STRING,
				allowNull: true,
			},
		},
		{
			sequelize,
			modelName: 'post',
		}
	);
	return post;
};
