const express=require('express')
const cors=require("cors")
const mongoose = require('mongoose')
const Todo=require('./Database/db.jsx')
const app=express()

app.use(express.json())
app.use(cors())
mongoose.connect('mongodb+srv://Aromal2059:PUSG4NUUPPFtfObO@cluster0.olkzeld.mongodb.net/?retryWrites=true&w=majority')

app.get('/todos', async (req, res) => {
	const todos = await Todo.find();

	res.json(todos);
});

app.post('/todo/new', (req, res) => {
	const todo = new Todo({
		text: req.body.text
	})

	todo.save();

	res.json(todo);
});

app.delete('/todo/delete/:id', async (req, res) => {
	const result = await Todo.findByIdAndDelete(req.params.id);

	res.json({result});
});

app.get('/todo/complete/:id', async (req, res) => {
	const todo = await Todo.findById(req.params.id);

	todo.complete = !todo.complete;

	todo.save();

	res.json(todo);
})

app.put('/todo/update/:id', async (req, res) => {
	const todo = await Todo.findById(req.params.id);

	todo.text = req.body.text;

	todo.save();

	res.json(todo);
});


const port = process.env.PORT || 4000;
app.listen(port , () => console.log(`Your server is running successfully on PORT ${port}`))