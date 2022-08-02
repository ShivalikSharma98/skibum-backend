require('dotenv').config();

module.exports = {
	development: {
		username: process.env.DEV_DATABASE_USERNAME,
		password: process.env.DEV_DATABASE_PASSWORD,
		database: process.env.DEV_DATABASE,
		host: '127.0.0.1',
		dialect: 'postgres',
	},
	test: {
		username: 'root',
		password: null,
		database: 'database_test',
		host: '127.0.0.1',
		dialect: 'postgres',
	},
	production: {
		use_env_variable: 'DATABASE_URL',
		host: '127.0.0.1',
		dialect: 'postgres',
		dialectOptions: {
			ssl: {
				require: true,
				rejectUnauthorized: false,
			},
		},
	},
};
