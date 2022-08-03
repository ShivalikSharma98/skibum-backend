# Ski Bum

## Description

This is the backend for Ski Bum a full stack (PERN) application that utilizes sequelize ORM. 

## Technologies
- PostgreSQL
- Express
- React
- Node
- Sequelize
  
## Models

### User Model
```js
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class user extends Model {
		static associate({ post }) {
			this.hasMany(post, { foreignKey: 'username' });
		}
		toJSON() {
			return { ...this.get(), password: undefined };
		}
	}
	user.init(
		{
			name: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			email: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			username: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			password: {
				type: DataTypes.STRING,
				allowNull: false,
			},
		},
		{
			sequelize,
			modelName: 'user',
		}
	);
	return user;
};
```

### Posts (Contains foreign key connecting to user allowing for a one to many relationship)
```js
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class post extends Model {
		static associate({ user }) {
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
```
## Resources
https://anjelicaa.medium.com/deploying-a-node-js-postgres-sequelize-app-to-heroku-da3dc9de07cd
https://dev.to/nedsoft/getting-started-with-sequelize-and-postgres-emp
https://www.bezkoder.com/react-node-express-postgresql/
