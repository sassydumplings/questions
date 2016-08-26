// this is our questions.js file located at /server/controllers/questions.js
// note the immediate function and the object that is returned is function

var mongoose = require('mongoose');
var Question = mongoose.model('Question');

module.exports = (function(){
	return {
		index: function(req,res){

			// calls to the database
			// retrieves the data
			// check for errors
			// sends a http response with JSON data

			Question.find({}, function(err,results){
				console.log('looking for questions in the controller');
				if(err){
					console.log("error finding questions " + err);
				} else {
					res.json(results);
				}
			});

		},
		create: function(req,res){

			console.log("this is request to create: " + req.body.name);

			var question =  new Question({
				question_text: req.body.question_text,
				question_description: req.body.question_description,
				username: req.body.username
			});

			questin.save(function(err,data){
				if(err){
					console.log("Error saving question " + req.body.name + " to the database.");
				} else {
					res.json(data);
				}
			});
		}
	};
})();  // invoke the function immediately

