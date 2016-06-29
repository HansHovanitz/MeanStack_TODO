'use strict';

//import 3rd party module express
var express = require('express');

//import todo
//var todos = require('../../mock/todos.json');

//'T'odo because convention for models in JS. 
var Todo = require('../models/todo');

var router = express.Router();

//todos is our json array
router.get('/todos', function(req, res) {
	Todo.find({}, function(err, todos) {
		if (err) {
			//do something.
			//500 corresponds to internal server error.
			return res.status(500).json({message: err.message});
		}
		res.json({todos: todos});
	});
});

// TODO: Add POST route to create new entries
router.post('/todos', function(req, res) {
	var todo = req.body;
	Todo.create(todo, function(err, todo) {
		if(err) {
			return res.status(500).json({err: err.message});
		}
		res.json({'todo': todo, message: 'Todo Created'});
	})	
});

// TODO: Add PUT route to update existing entries
router.put('/todos/:id', function(req, res) {
	var id = req.params.id;
	var todo = req.body;
	if(todo && todo._id !== id){
		return res.status(500).json({err: "IDs don't match!"})
	}
	Todo.findByIdAndUpdate(id, todo, {new: true}, function(err, todo) {
		if(err) {
			return res.status(500).json({err: err.message});
		}
		res.json({'todo': todo, message: 'Todo Updated'});
	})	
});

// TODO: Add DELETE route to delte entries 
router.delete('/todos/:id', function (req, res) {
    var todoId = req.params.id; // This maps to the :id in the url
    Todo.findByIdAndRemove(todoId, function (err, result) {
        if (err) {
            res.status(500).json({ message: err.message });
        } else {
            res.json({ message: 'Deleted Todo' });
        }
    });
});

//export
module.exports = router;