// this is our friends.js file located at /server/controllers/questions.js
// note the immediate function and the object that is returned

var mongoose = require('mongoose');
var Question = mongoose.model('Question');

module.exports = (function(){
	return {
		create: function(req,res){
			console.log(req.body.question_text);

			var question = new Question({
				question_text: req.body.question_text,
				question_description: req.body.question_description,
				username: req.body.username
			});

			question.save(function(err,data){
				if(err){
					console.log("Error saving question" + req.body.question_text);
				} else {
					res.json(data);
				}
			});
		}
	};
})();
