import { Product } from './src/data/ProductInterface';
import { User } from './src/data/UserInterface';
import { Request, Response } from 'express';

const express = require('express');


const app = express();
app.use(express.json());


export const users: User[] = [{
	id: 100,
	name: 'John Doe',
	age: 54,
	hairColor: 'brown',
	hobbies: ['swimming', 'bicycling', 'video games'],
}, {
	id: 101,
	name: 'Brenda Smith Felipez',
	age: 33,
	hairColor: 'black',
	hobbies: ['golf', 'mathematics'],
}, {
	id: 102,
	name: 'Willius Kona',
	age: 27,
	hairColor: 'blonde',
	hobbies: ['gaming', 'gambling', 'gymnastics'],
}];

let currentUser: User = {
	id: 103,
	name: 'John Doe',
	age: 54,
	hairColor: 'brown',
	hobbies: ['swimming', 'bicycling', 'video games'],
};

export const products: Product[] = [{
	id: 100,
	name: 'Flat-Screen TV',
	price: '$300',
	description: 'Huge LCD screen, a great deal',
	rating: 4.5,
}, {
	id: 101,
	name: 'Basketball',
	price: '$10',
	description: 'Just like the pros use',
	rating: 3.8,
}, {
	id: 102,
	name: 'Running Shoes',
	price: '$120',
	description: 'State-of-the-art technology for optimum running',
	rating: 4.2,
}];

app.get('/current-user', (req: Request, res: Response) => {
	res.json(currentUser);
});

interface GetUserParams {
	id: string;
};

app.get('/users/:id', (req: Request<GetUserParams>, res: Response) => {
	
	const id = parseInt(req.params.id, 10); 
	res.json(users.find(user => user.id === id));
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

interface GetProductParams {
	id: string;
};

app.get('/products/:id', (req: Request<GetProductParams>, res: Response) => {
	const id = parseInt(req.params.id, 10); 
	res.json(products.find(product => product.id === id));
});

app.get('/products', (req: Request, res: Response) => {
	res.json(products);
});

app.listen(8080, () => {
	console.log('Server is listening on port 8080');
});