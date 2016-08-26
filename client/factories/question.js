qaModule.factory('QuestionFactory', function($http){
	var questions = [];
	var factory = {};

	// building out the create a question

	factory.create = function(question, callback) {
		$http.post('/question', question).then(function(res) {
			callback(res);
		});
	};

	return factory;
});