const express = require('express');
const { sequelize } = require('./models/');
const { user } = require('./models/');
const app = express();
app.use(express.json());

// create new users
app.post('/api/users', async (req, res) => {
	const { name, email, username, password } = req.body;
	try {
		const User = await user.create({ name, email, username, password });
		return res.json(User);
	} catch (error) {
		console.log(error);
		return res.status(500).json(error);
	}
});

// delete a users account
app.delete('/api/users/:username', async (req, res) => {
	try {
		const User = await user.findOne({
			where: { username: req.params.username },
		});
		User.destroy();
		return res.json(User);
	} catch (error) {
		console.log(error);
		return res.status(500).json(error);
	}
});

app.listen({ port: 9000 }, async () => {
	console.log('Server running on local host 9000');
	await sequelize.authenticate();
	console.log('Database Connected');
});
