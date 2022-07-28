const express = require('express');
const { sequelize } = require('./models/index.js');
const { user } = require('./models/user');
const app = express();
app.use(express.json());

// create new users
app.post('/api/users', async (req, res) => {
	const { name, email, username, password } = req.body;
	try {
		const User = await user.create({ name, email, username, password });
		return res.json(User);
	} catch (err) {
		console.log(error);
		return res.status(500).json(error);
	}
});

app.listen({ port: 9000 }, async () => {
	console.log('Server running on local host 9000');
    await sequelize.sync({ alter: true });
    console.log('Database synced')
});
