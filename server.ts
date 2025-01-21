import { User } from './src/UserInterface';
import { users as usersList } from './src/UsersData';
import { products } from './src/ProductData';

const express = require('express');
const app = express();
app.use(express.json());

let users: User[] = usersList;

let currentUser: User = {
	name: 'John Doe',
	age: 54,
	hairColor: 'brown',
	hobbies: ['swimming', 'bicycling', 'video games'],
};

app.get('/current-user', (req, res) => {
	res.json(currentUser);
	console.log(currentUser);
});

app.get('/users/:id', (req, res) => {
	const { id } = req.params;

	res.json(users.find(user => user.id === id));
});

app.post('/users/:id', (req, res) => {
	const { id } = req.params;
	const { user: updatedUser } = req.body;

	users = users.map(user => user.id === id ? updatedUser : user);

	res.json(users.find(user => user.id === id));
});

app.get('/users', (req, res) => {
	res.json(users);
});

app.get('/products/:id', (req, res) => {
	const { id } = req.params;

	res.json(products.find(product => product.id === id));
});

app.get('/products', (req, res) => {
	res.json(products);
});

app.listen(8080, () => {
	console.log('Server is listening on port 8080');
});