// This is the question.js file located at /server/models/question.js
// We want to create a file that has the schema for our questions and
// creates a model that we can then call upon in our controller
var mongoose = require('mongoose');


// Questions have many answers, including 1:many relation object
// that stores an array of pointers to related answers

var QuestionSchema = new mongoose.Schema({
	question_text: {type: String, required: true},
	question_description: {type: String},
	answers: [{type: mongoose.Schema.Types.ObjectId, ref: 'Answer'}]
}, {timestamps: true});

// use the schema to create the model
// Note that creating a model CREATES the collection in the database
// (makes the collection plural)

var Question = mongoose.model('Question', QuestionSchema);

// notice that we aren't exporting anything -- this is because this file will be run when we require it
// using our config file and then since the model is defined we'll be able to access it from our controller
