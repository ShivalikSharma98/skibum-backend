const express = require('express');
const { sequelize } = require('./models/');
const { user } = require('./models/');
const app = express();
app.use(express.json());

// Create new users
// POST (create) /api/user
app.post('/api/user', async (req, res) => {
	const { name, email, username, password } = req.body;
	try {
		const User = await user.create({ name, email, username, password });
		return res.json(User);
	} catch (error) {
		console.log(error);
		return res.status(500).json(error);
	}
});

// Delete a users account
// DELETE (delete) /api/user/:username
app.delete('/api/user/:username', async (req, res) => {
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

// Show all posts
// GET (show) /api/posts

// Show all posts for a specific user
// GET (show) /api/user/:username

// Create a post for that user
// POST (create) /api/user/:username/post/

// Update a users post
// PATCH (update) /api/user/:username/post/:id

// Delete a users post
// DELETE (delete) /api/users/:username/post/:id


app.listen({ port: 9000 }, async () => {
	console.log('Server running on local host 9000');
	await sequelize.authenticate();
	console.log('Database Connected');
});
