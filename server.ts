import { User } from './src/UserInterface';
import { Request, Response } from 'express';

const express = require('express');


const app = express();
app.use(express.json());


export const users: User[] = [{
	id: 1,
	name: 'John Doe',
	age: 54,
	hairColor: 'brown',
	hobbies: ['swimming', 'bicycling', 'video games'],
}, {
	id: 2,
	name: 'Brenda Smith Felipez',
	age: 33,
	hairColor: 'black',
	hobbies: ['golf', 'mathematics'],
}, {
	id: 3,
	name: 'Willius Kona',
	age: 27,
	hairColor: 'blonde',
	hobbies: ['gaming', 'gambling', 'gymnastics'],
}];

let currentUser: User = {
	id: 1,
	name: 'John Doe',
	age: 54,
	hairColor: 'brown',
	hobbies: ['swimming', 'bicycling', 'video games'],
};

app.get('/current-user', (req: Request, res: Response) => {
	res.json(currentUser);
	console.log(currentUser);
});

interface GetUserParams {
	id: string;
}

app.get('/users/:id', (req: Request<GetUserParams>, res: Response) => {
	const id = parseInt(req.params.id, 10); // Convert string to number
	res.json(users.find(user => user.id == id));
});

// app.post('/users/:id', (req, res) => {
// 	const { id } = req.params;
// 	const { user: updatedUser } = req.body;

// 	users = users.map(user => user.id === id ? updatedUser : user)
// 	res.json(users.find(user => user.id === id));
// });

// app.get('/users', (req, res) => {
// 	res.json(users);
// });

// app.get('/products/:id', (req, res) => {
// 	const { id } = req.params;

// 	res.json(products.find(product => product.id === id));
// });

// app.get('/products', (req, res) => {
// 	res.json(products);
// });

app.listen(8080, () => {
	console.log('Server is listening on port 8080');
});