var mongoose = require('mongoose');

// likes belong to one answer
// we store a pointer to _id of the related answer

var LikeSchema = new mongoose.Schema({
	like: { type: Boolean, required: true} ,
	answer: {type: mongoose.Schema.ObjectId, ref: 'Answer'}
    }, {timestamps: true});
