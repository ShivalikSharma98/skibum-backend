const express = require('express');
const { sequelize } = require('./models/');
const { user, post } = require('./models/');
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

// Delete a users account and all posts
// DELETE (delete) /api/user/:username
app.delete('/api/user/:username', async (req, res) => {
	try {
		await user.destroy({
			where: { username: req.params.username },
		});
		await post.destroy({
			where: { username: req.params.username },
		});
		return res.status(200).end();
	} catch (error) {
		console.log(error);
		return res.status(500).json(error);
	}
});

// Show all posts
// GET (show) /api/posts
app.get('/api/posts', async (req, res) => {
	try {
		const Posts = await post.findAll();
		return res.json(Posts);
	} catch (error) {
		console.log(error);
		return res.status(500).json(error);
	}
});

// Show all posts for a specific user
// GET (show) /api/user/:username
app.get('/api/user/:username', async (req, res) => {
	try {
		const Posts = await post.findAll({
			where: { username: req.params.username },
		});
		return res.json(Posts);
	} catch (error) {
		console.log(error);
		return res.status(500).json(error);
	}
});

// Create a post for that user
// POST (create) /api/user/:username/post/
app.post('/api/user/:username/post', async (req, res) => {
	const {
		title,
		date,
		start_location,
		end_location,
		directions,
		difficulty,
		description,
		image_url,
	} = req.body;
	try {
		const Post = await post.create({
			username: req.params.username,
			title,
			date,
			start_location,
			end_location,
			directions,
			difficulty,
			description,
			image_url,
		});
		return res.json(Post);
	} catch (error) {
		console.log(error);
		return res.status(500).json(error);
	}
});

// Update a users post
// PATCH (update) /api/user/:username/post/:id
app.patch('/api/user/:username/post/:id', async (req, res) => {
	const {
		title,
		date,
		start_location,
		end_location,
		directions,
		difficulty,
		description,
		image_url,
	} = req.body;
	try {
		const Post = await post.update(
			{
				username: req.params.username,
				title,
				date,
				start_location,
				end_location,
				directions,
				difficulty,
				description,
				image_url,
			},
			{ where: { username: req.params.username, id: req.params.id } }
		);
		return res.json(Post);
	} catch (error) {
		console.log(error);
		return res.status(500).json(error);
	}
});

// Delete a users post
// DELETE (delete) /api/users/:username/post/:id
app.delete('/api/user/:username/post/:id', async (req, res) => {
	try {
		await post.destroy({
			where: { username: req.params.username, id: req.params.id },
		});
		return res.status(200).end();
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
