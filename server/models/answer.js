var mongoose = require('mongoose');


// answers belong to a particular question
// so added question to track _id of related question
// answer text is required to be a minimum of 5 chars long

// an answer has many likes to added a data element
// to track an array of related likes. We don't view the likes
// we just count them up and display the total count

var AnswerSchema = new mongoose.Schema({
	answer_text: {type: String, minlength: 5},
	supporting_details: {type: String},
	question: {type: mongoose.Schema.ObjectId, ref: 'Question'},
	likes: [{type: mongoose.Schema.Types.ObjectId, ref: 'Like'}]
}, {timestamps: true});

