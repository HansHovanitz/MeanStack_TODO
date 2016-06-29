'use strict';

var mongoose = require('mongoose');

// todo.name
// todo.completed

//mongoose(schema) constructor 
var todoSchema = new mongoose.Schema({
	name: String,
	completed: Boolean 
});

var model = mongoose.model('Todo', todoSchema);

//mongoose is a singleton (mongoose module persists across entire application)
module.exports = model;